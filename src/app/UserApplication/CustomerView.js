import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TextBox from "../components/TextBox";
import DropBox from "../components/DropBox";
import {
  listofFirst,
  listofSecond,
  listofThird,
  listofForth,
} from "../components/customers";
import "react-tabs/style/react-tabs.css";

export class CustomerView extends Component {
  constructor(props) {
    super(props);
    // this.state = { ...props.location.state.datToload };
    this.mapper = {
      fullNameEn: "name",
    };
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
                    <Tab>Personal Information</Tab>
                    <Tab>Present Address</Tab>
                    <Tab>Permanent Address</Tab>
                    <Tab>Documents</Tab>
                  </TabList>

                  <TabPanel>
                    <div
                      className="row justify-content-md-start mb-2 mt-4 p-3"
                      id="submit1"
                    >
                      <div className="col-md-3" style={{ textAlign: "center" }}>
                        <img
                          src={
                            this.state.ownbase64 !== null &&
                            this.state.ownbase64 !== undefined &&
                            this.state.submitPhoto === true
                              ? "data:image/png;base64," + this.state.ownbase64
                              : process.env.PUBLIC_URL + "/person.jpg"
                          }
                          className="rounded mx-auto d-block"
                          alt="user image"
                          width="50%"
                        />
                      </div>
                      <div className="col-md-9">
                        {listofFirst.map((v, k) => {
                          //console.log(v, k);
                          return (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              placeholder={v.placeholder}
                              disable={v.disable}
                              val={
                                v.id === "identityDocId"
                                  ? this.state.cp.identityDocType === 3
                                    ? this.state.nidDetail.nationalId10 !== null
                                      ? this.state.nidDetail.nationalId10
                                      : this.state.nidDetail.nationalId17
                                    : this.state.passportDetail !== undefined &&
                                      this.state.passportDetail !== null
                                    ? this.state.passportDetail.passportNumber
                                    : ""
                                  : this.state.cp[v.id] !== undefined &&
                                    this.state.cp[v.id] !== null
                                  ? this.state.cp[v.id]
                                  : ""
                              }
                            />
                          );
                        })}
                      </div>
                      <div className="col-md-12">
                        <p className="preview-p">Personal Info</p>
                      </div>
                      {listofSecond.map((v, k) => {
                        //console.log(v, k);
                        {
                          return (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              placeholder={v.placeholder}
                              disable={v.disable}
                              val={
                                this.state.cp[v.id] !== undefined &&
                                this.state.cp[v.id] !== null
                                  ? this.state.cp[v.id]
                                  : "N/A"
                              }
                            />
                          );
                        }
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div
                      className="row justify-content-md-start mb-2 mt-4 p-3"
                      id="submit1"
                    >
                      {listofThird.map((v, k) => {
                        //console.log(v, k);
                        {
                          return v.options === null ||
                            v.options === undefined ? (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              placeholder={v.placeholder}
                              disable={v.disable}
                              val={v.val}
                              Address="present"
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
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div
                      className="row justify-content-md-start mb-2 mt-4 p-3"
                      id="submit1"
                    >
                      {listofForth.map((v, k) => {
                        //console.log(v, k);
                        {
                          return v.options === null ||
                            v.options === undefined ? (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              placeholder={v.placeholder}
                              disable={v.disable}
                              val={v.val}
                              Address="present"
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
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="row justify-content-md-start mb-2 mt-4">
                      <div className="col-md-12">
                        <div
                          className="col-md-3 d-inline-block"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={
                              this.state.ownbase64 !== null &&
                              this.state.ownbase64 !== undefined &&
                              this.state.submitPhoto === true
                                ? "data:image/png;base64," +
                                  this.state.ownbase64
                                : process.env.PUBLIC_URL + "/front.jpg"
                            }
                            className="rounded mx-auto d-block"
                            alt="user image"
                            width="100%"
                          />
                          <p>Account Owner NID Front</p>
                        </div>
                        <div
                          className="col-md-3 d-inline-block"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={
                              this.state.ownbase64 !== null &&
                              this.state.ownbase64 !== undefined &&
                              this.state.submitPhoto === true
                                ? "data:image/png;base64," +
                                  this.state.ownbase64
                                : process.env.PUBLIC_URL + "/back.jpg"
                            }
                            className="rounded mx-auto d-block"
                            alt="user image"
                            width="100%"
                          />
                          <p>Account Owner NID Back</p>
                        </div>
                        <div
                          className="col-md-3 d-inline-block"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={
                              this.state.ownbase64 !== null &&
                              this.state.ownbase64 !== undefined &&
                              this.state.submitPhoto === true
                                ? "data:image/png;base64," +
                                  this.state.ownbase64
                                : process.env.PUBLIC_URL + "/front.jpg"
                            }
                            className="rounded mx-auto d-block"
                            alt="user image"
                            width="100%"
                          />
                          <p>Nominee NID Front</p>
                        </div>
                        <div
                          className="col-md-3 d-inline-block"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={
                              this.state.ownbase64 !== null &&
                              this.state.ownbase64 !== undefined &&
                              this.state.submitPhoto === true
                                ? "data:image/png;base64," +
                                  this.state.ownbase64
                                : process.env.PUBLIC_URL + "/back.jpg"
                            }
                            className="rounded mx-auto d-block"
                            alt="user image"
                            width="100%"
                          />
                          <p>Nominee NID Back</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CustomerView;
