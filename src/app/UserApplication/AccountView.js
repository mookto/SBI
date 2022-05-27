import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TextBox from "../components/TextBox";
import {
  account1,
  account2,
  branch,
  account3,
  nominee,
  tpInfo,
} from "../components/accounts";
import "react-tabs/style/react-tabs.css";
import { instance, baseURL } from "../service/ApiUrls";
import Loader from "../components/Loader";

export default class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.location.state.datToload,
      loaderShow: false,
      loaderText: "Loading....",
    };
  }

  componentDidMount = () => {
    this.callAccountDetailWithID();
  };

  callAccountDetailWithID = () => {
    this.setState({ loaderShow: true }, () => {
      instance
        .post(baseURL + "/getAccountDetail/" + this.state.account.id)
        .then((res) => {
          if (res.data.result.error === false) {
            this.setState(
              {
                ...res.data.data,
                loaderShow: false,
                nomineeInfo: res.data.data.nomineeInfoResponse,
              },
              () => {
                this.callDocumentList();
              }
            );
          }
        });
    });
  };

  callDocumentList = () => {
    this.setState({ loaderShow: true }, () => {
      this.state.nomineeInfoResponse !== null &&
        this.state.nomineeInfoResponse.map((v) => {
          //console.log(v);
          if (v.nominee !== undefined) {
            instance
              .post(baseURL + "/api/filesusingreferencebase64", null, {
                params: { uniquereference: v.nominee.documentReferenceNumber },
              })
              .then((res) => {
                if (res.data.result.error === false) {
                  let data = res.data.data;
                  //console.log("picdata", data);
                  data.map((pic) => {
                    v["nominee"]["photo64"] = pic.base64Content;
                  });
                }
                this.setState({ loaderShow: false });
              })
              .catch((err) => this.setState({ loaderShow: false }));
          }
        });
      this.setState({ loaderShow: false });
    });
  };

  render() {
    return (
      <div>
        <div className="row align-items-start proBanner mt-4">
          <div className="col-md-12 mb-2" style={{ textAlign: "right" }}>
            <button
              className="btn btn-secondary"
              onClick={() => {
                this.props.history.push({ pathname: "/account-list" });
              }}
            >
              <i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back
              to Account List
            </button>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <Tabs>
                  <TabList>
                    <Tab>Account Info</Tab>
                    <Tab>Nominee</Tab>
                    <Tab>Transaction Profile</Tab>
                    <Tab>Risk Grading</Tab>
                    {/* <Tab>Documents</Tab> */}
                  </TabList>

                  <TabPanel>
                    <div
                      className="row justify-content-md-start mb-2 mt-2 p-3"
                      id="submit1"
                    >
                      {account1.map((v, k) => {
                        //console.log(v, k);
                        {
                          return (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              disable={v.disable}
                              val={
                                this.state.product[v.id] !== undefined &&
                                this.state.product[v.id] !== null
                                  ? this.state.product[v.id]
                                  : "N/A"
                              }
                            />
                          );
                        }
                      })}
                      {account2.map((v, k) => {
                        //console.log(v, k);
                        {
                          return (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              disable={v.disable}
                              val={
                                this.state.account[v.id] === false
                                  ? "Single"
                                  : "Joint"
                              }
                            />
                          );
                        }
                      })}
                      {branch.map((v, k) => {
                        //console.log(v, k);
                        {
                          return (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              disable={v.disable}
                              val={
                                this.state.branch[v.id] !== undefined &&
                                this.state.branch[v.id] !== null
                                  ? this.state.branch[v.id]
                                  : "N/A"
                              }
                            />
                          );
                        }
                      })}
                      {/* {account3.map((v, k) => {
                        //console.log(v, k);
                        {
                          return (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              disable={v.disable}
                              val={
                                this.state.account[v.id] !== undefined &&
                                this.state.account[v.id] !== null
                                  ? this.state.account[v.id]
                                  : "N/A"
                              }
                            />
                          );
                        }
                      })} */}
                      <div className="col-md-12">
                        <p className="preview-p">Account Owner</p>
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Date of Birth</th>
                              <th>Marital Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.listCustomers.map((owner) => (
                              <tr>
                                <td>{owner.cp.name}</td>
                                <td>{owner.cp.dob}</td>
                                <td>{owner.cp.marital_status}</td>
                                <td>
                                  <a
                                    style={{
                                      color: "#076dea",
                                      cursor: "pointer",
                                      fontWeight: "bold",
                                    }}
                                    onClick={() => {
                                      this.props.history.push({
                                        pathname: "/customer-view",
                                        state: {
                                          fromCustomerList: true,
                                          datToload: owner,
                                        },
                                      });
                                    }}
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    {this.state.nomineeInfo !== null &&
                      this.state.nomineeInfo.map((singlenominee) => {
                        //console.log(singlenominee["nominee"]);
                        singlenominee["nominee"]["sharePercent"] =
                          singlenominee["sharePercent"];
                        return (
                          <div
                            className="row justify-content-md-start mb-2 mt-2 p-3"
                            style={{ borderBottom: "1px solid gray" }}
                            id="submit1"
                          >
                            <div
                              className="col-md-3"
                              style={{ textAlign: "center" }}
                            >
                              <img
                                src={
                                  singlenominee.nominee !== undefined &&
                                  singlenominee.nominee.photo64 !== undefined &&
                                  singlenominee.nominee.photo64 !== null
                                    ? `data:image/png;base64,${singlenominee.nominee.photo64}`
                                    : process.env.PUBLIC_URL + "/no-image.jpg"
                                }
                                className="rounded mx-auto d-block"
                                alt="user image"
                                width="50%"
                                style={{ maxHeight: "220px" }}
                              />
                            </div>
                            <div className="col-md-9">
                              {nominee.map((v, k) => {
                                //console.log(v, k);
                                {
                                  return (
                                    <TextBox
                                      dim={v.dim}
                                      id={v.id}
                                      title={v.title}
                                      isMandatory={v.isMandatory}
                                      disable={v.disable}
                                      val={
                                        singlenominee["nominee"] !==
                                          undefined &&
                                        singlenominee["nominee"] !== null
                                          ? singlenominee["nominee"][v.id]
                                          : "N/A"
                                      }
                                    />
                                  );
                                }
                              })}
                            </div>
                          </div>
                        );
                      })}
                  </TabPanel>
                  <TabPanel>
                    <div className="col-md-12">
                      {tpInfo.map((v, k) => {
                        //console.log(this.state.tp[v]);
                        return (
                          <TextBox
                            dim={v.dim}
                            id={v.id}
                            title={v.title}
                            isMandatory={v.isMandatory}
                            //placeholder={v.placeholder}
                            disable={true}
                            val={
                              this.state.tp !== null &&
                              this.state.tp[v.id] !== undefined &&
                              this.state.tp[v.id] !== null
                                ? this.state.tp[v.id]
                                : "N/A"
                            }
                          />
                        );
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="col-md-12">
                      <p className="preview-p">Risk Grading</p>
                      <table
                        className="table table-bordered"
                        style={{ width: "50%" }}
                      >
                        <thead>
                          <tr>
                            <th>Risk Type</th>
                            <th>Overall Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Regular {}</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>High (15)</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                  {/* <TabPanel>Documents</TabPanel> */}
                </Tabs>
                <Loader
                  loaderShow={this.state.loaderShow}
                  onHide={() => {}}
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
