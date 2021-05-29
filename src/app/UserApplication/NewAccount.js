import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextBox from "../components/TextBox";
import DropBox from "../components/DropBox";
import {
  instance,
  additionalaccountinfo,
  errorCompute,
  baseURL,
} from "../service/ApiUrls";
import { newAccount, initialDeposit, ownerInfo } from "../components/extra.js";
import PopUp from "../components/PopUp";
import Loader from "../components/Loader";
import confirmAlert from "react-confirm-alert";
import Checking from "../components/Checking";
import {
  TYPEOFONBOARDING,
  GeographicRisks,
  ProductAndChannelRisk,
} from "../components/riskgrading";
import { dataToShow } from "../components/dataToShow";

export function makeid(length) {
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

export class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBook: false,
      smsAlert: false,
      debitCard: false,
      modalShow: false,
      loaderShow: false,
      loaderText: "Loading....",
      accountType: "Single",
      identificationType: 3,
      owner: [],
    };
  }
  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };
  loaderHide = () => {
    this.setState({ loaderShow: false });
  };
  modalShowHandler = () => {
    this.setState({ modalShow: true });
  };
  modalHideHandler = () => {
    this.setState({ modalShow: false });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ loaderShow: true, modalShow: false }, () => {
      if (this.state.nid.length === 17 || this.state.nid.length === 10) {
        let dataToSend = {
          identficationNumber: this.state.nid,
          identificationType: this.state.identificationType,
        };
        instance
          .post(baseURL + "/getcustomerdata", dataToSend)
          .then((res) => {
            console.log(res.data);
            if (res.data.result.error === false) {
              this.setState({ loaderShow: false, owner: res.data });
              if (res.data.data !== null) {
                // confirmAlert({
                //   title: "Already User Exists",
                //   message: (
                //     <p className="mod-p">
                //       {" "}
                //       {res.data.data.cp.name}{" "}
                //     </p>
                //   ),
                //   buttons: [
                //     {
                //       label: "Ok",
                //       onClick: () => {},
                //     },
                //   ],
                // });
              }
            } else if (res.data.result.error === false) {
              this.setState({ loaderShow: false }, () => {
                confirmAlert({
                  title: "Error Message",
                  message: (
                    <p className="mod-p">
                      No Customer Found ! Please Create Customer from{" "}
                      <Link to="/usermobile">here</Link>{" "}
                    </p>
                  ),
                  buttons: [
                    {
                      label: "Ok",
                      onClick: () => {},
                    },
                  ],
                });
              });
            }
          })
          .catch((err) => errorCompute(err));
      }
    });
  };
  transferData = (id, value) => {
    this.setState({ [id]: value }, () => {
      if (id === "accountType") {
        if (value === "single") {
        }
        if (value === "joint") {
        }
      }
    });
  };

  componentDidMount = () => {
    // let timer = setInterval(() => {
    //   this.setState({ loaderText: makeid(5) });
    // }, 2000);
    // setTimeout(() => {
    //   clearInterval(timer);
    //   this.loaderHide();
    // }, 10000);
  };
  setVal = (e) => {
    console.log(e);
    this.setState({ [e.name]: e.value });
  };
  render() {
    const accountOwnerForm = (
      <>
        <div className="col-md-6 d-inline-block">
          <div className="form-group">
            <label htmlFor="identityType">Identification Type</label>

            <select
              className="form-control"
              onChange={(e) => {
                this.setState({
                  identificationType: e.target.value === "nid" ? 3 : 5,
                });
              }}
            >
              <option value="nid">National ID</option>
              <option value="passport">Passport</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 d-inline-block">
          <div className="form-group">
            <label htmlFor="name">Identification Number</label>

            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Number"
              onChange={(e) => {
                this.setState({ nid: e.target.value }, () => {});
              }}
            />
          </div>
        </div>
      </>
    );
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              {this.props.titleToShow !== undefined &&
              this.props.titleToShow === false ? (
                ""
              ) : (
                <h4 className="card-title">New Account</h4>
              )}
              <div className="card-body">
                <div className="row justify-content-md-center mb-2">
                  <div className="col-md-12">
                    <div className="row justify-content-md-center">
                      {/* <div className="col-md-1 d-inline-block pt-4">
                        <i
                          className="mdi mdi-close-box-outline mr-1"
                          style={{
                            fontSize: "24px",
                            color: "red",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            console.log();
                          }}
                        ></i>
                      </div> */}
                      {/* <div className="col-md-10 d-inline-block">
                        {ownerInfo.map((v, k) => {
                          //console.log(v, k);
                          return (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              placeholder={v.placeholder}
                              disable={v.disable}
                              val={v.val}
                            />
                          );
                        })}
                      </div> */}
                    </div>

                    <div className="form-header">
                      <h3 className="box-title">Account Info</h3>
                    </div>
                    {newAccount.map((v, k) => {
                      //console.log(v, k);
                      {
                        return v.options === null || v.options === undefined ? (
                          <TextBox
                            dim={v.dim}
                            id={v.id}
                            title={v.title}
                            isMandatory={v.isMandatory}
                            placeholder={v.placeholder}
                            disable={v.disable}
                            val={this.state[v.id]}
                          />
                        ) : (
                          <DropBox
                            dim={v.dim}
                            id={v.id}
                            title={v.title}
                            isMandatory={v.isMandatory}
                            placeholder={v.placeholder}
                            disable={v.disable}
                            options={v.options}
                            transferData={this.transferData}
                          />
                        );
                      }
                    })}
                    <div className="form-header">
                      <h3
                        className="box-title"
                        style={{ paddingBottom: "15px" }}
                      >
                        {/* <Checking
                          type={TYPEOFONBOARDING}
                          setVal={this.setVal}
                          question="Type of OnBoarding"
                        />
                        <Checking
                          type={ProductAndChannelRisk}
                          setVal={this.setVal}
                          question="Type of Product"
                          showClientDropDown={true}
                        /> */}
                        Account Owner{" "}
                        <button
                          className="btn btn-dark"
                          style={{
                            float: "right",
                            padding: "2px 12px",
                            fontSize: "14px",
                          }}
                          onClick={() => {
                            this.setState({ modalShow: true });
                          }}
                        >
                          + Add
                        </button>
                      </h3>
                    </div>
                    <div className="col-md-12">
                      <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>National Id</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.owner.map((owner) => (
                            <tr>
                              <td>{owner.name}</td>
                              <td>{owner.dob}</td>
                              <td>{owner.nationalId10}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="form-header">
                      <h3 className="box-title">Initial Deposit</h3>
                    </div>
                    {initialDeposit.map((v, k) => {
                      //console.log(v, k);
                      {
                        return v.options === null || v.options === undefined ? (
                          <TextBox
                            dim={v.dim}
                            id={v.id}
                            title={v.title}
                            isMandatory={v.isMandatory}
                            placeholder={v.placeholder}
                            disable={v.disable}
                            val={this.state[v.id]}
                          />
                        ) : (
                          <DropBox
                            dim={v.dim}
                            id={v.id}
                            title={v.title}
                            isMandatory={v.isMandatory}
                            placeholder={v.placeholder}
                            disable={v.disable}
                            options={v.options}
                          />
                        );
                      }
                    })}
                    <div className="col-md-6 d-inline-block">
                      <div
                        className="form-group"
                        style={{ marginTop: "5px", marginBottom: "0px" }}
                      >
                        <label htmlFor="Additional">Additional Services</label>
                      </div>
                      <div className="form-check form-check-inline d-p">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value={this.state.checkBook}
                          onChange={(e) => {
                            this.setState({ checkBook: !this.state.checkBook });
                          }}
                        />

                        <label
                          className="form-check-label p-l"
                          htmlFor="inlineCheckbox1"
                        >
                          Check Book
                        </label>
                      </div>
                      <div className="form-check form-check-inline d-p">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value={this.state.smsAlert}
                          onChange={(e) => {
                            this.setState({ smsAlert: !this.state.smsAlert });
                          }}
                        />
                        <label
                          className="form-check-label p-l"
                          htmlFor="inlineCheckbox2"
                        >
                          SMS Alert
                        </label>
                      </div>
                      <div className="form-check form-check-inline d-p">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value={this.state.debitCard}
                          onChange={(e) => {
                            this.setState({ debitCard: !this.state.debitCard });
                          }}
                        />
                        <label
                          className="form-check-label p-l"
                          htmlFor="inlineCheckbox2"
                        >
                          Debit Card
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3" style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-success"
                    // onClick={() => {
                    //   console.log();
                    // }}
                  >
                    Submit
                  </button>
                </div>
                <PopUp
                  modalShow={this.state.modalShow}
                  onHide={this.modalHideHandler}
                  modalHideHandler={this.modalHideHandler}
                  modalHeading="Account Owner"
                  modalBody={accountOwnerForm}
                  submitHandler={this.submitHandler}
                />
                <Loader
                  loaderShow={this.state.loaderShow}
                  onHide={this.loaderHide}
                  loaderText={this.state.loaderText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewAccount;
