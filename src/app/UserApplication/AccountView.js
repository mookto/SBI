import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TextBox from "../components/TextBox";
import {
  account1,
  account2,
  branch,
  account3,
  nominee,
} from "../components/accounts";
import "react-tabs/style/react-tabs.css";

export default class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.location.state.datToload };
  }

  render() {
    return (
      <div>
        <div className="row align-items-start proBanner mt-4">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <Tabs>
                  <TabList>
                    <Tab>Account Info</Tab>
                    <Tab>Nominee</Tab>
                    <Tab>Transaction Profile</Tab>
                    <Tab>Documents</Tab>
                  </TabList>

                  <TabPanel>
                    <div
                      className="row justify-content-md-start mb-2 mt-4 p-3"
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
                      {account3.map((v, k) => {
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
                      })}
                      <div className="col-md-12">
                        <p className="preview-p">Account Owner</p>
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Date of Birth</th>
                              <th>Marital Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.listCustomers.map((owner) => (
                              <tr>
                                <td>{owner.cp.name}</td>
                                <td>{owner.cp.dob}</td>
                                <td>{owner.cp.marital_status}</td>
                                <td
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
                                  {" "}
                                  View{" "}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div
                      className="row justify-content-md-start mb-2 mt-4 p-3"
                      id="submit1"
                    >
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
                                this.state.nomineeInfo[v.id] !== undefined &&
                                this.state.nomineeInfo[v.id] !== null
                                  ? this.state.nomineeInfo[v.id]
                                  : "N/A"
                              }
                            />
                          );
                        }
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>Transaction Profile</TabPanel>
                  <TabPanel>Documents</TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
