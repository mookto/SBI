import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextBox from "../components/TextBox";
import DropBox from "../components/DropBox";
import { instance, additionalaccountinfo } from "../service/ApiUrls";
import { newAccount, initialDeposit, ownerInfo } from "../components/extra.js";
import PopUp from "../components/PopUp";
import Loader from "../components/Loader";

export class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBook: false,
      smsAlert: false,
      debitCard: false,
      loaderShow: true,
      loaderText: "Loading....",
    };
  }
  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };
  loaderHide = () => {
    this.setState({ loaderShow: false });
  };
  submitHandler = (e) => {
    e.preventdefault();
  };
  render() {
    const accountOwnerForm = (
      <>
        <div className="col-md-6 d-inline-block">
          <div className="form-group">
            <label htmlFor="identityType">Identification Type</label>

            <select className="form-control" onChange={this.props.handleChange}>
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
              onChange={this.handleChange}
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
              <h4 className="card-title">New Account</h4>
              <div className="card-body">
                <div className="row justify-content-md-center mb-2">
                  <div className="col-md-12">
                    <div className="form-header">
                      <h3
                        className="box-title"
                        style={{ paddingBottom: "15px" }}
                      >
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
                    <div className="row justify-content-md-center">
                      <div className="col-md-1 d-inline-block pt-4">
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
                      </div>
                      <div className="col-md-10 d-inline-block">
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
                      </div>
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
                          />
                        );
                      }
                    })}
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
                  <Link to="/nominee-information">
                    <button
                      className="btn btn-success"
                      // onClick={() => {
                      //   console.log();
                      // }}
                    >
                      Submit
                    </button>
                  </Link>
                </div>
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
