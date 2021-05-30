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
import { DOCUMENTCHECKLIST } from "../Enum";

export class CustomerView extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.location.state.datToload };

    this.mapper = {
      fullNameEn: "name",
    };
  }

  convertDocumentLists = () => {
    this.state.documentDetailList.map((v) => {
      if (Number(v.documentType) === DOCUMENTCHECKLIST.PHOTO) {
        this.setState({ customerPhoto: v.base64Content });
      } else if (Number(v.documentType) === DOCUMENTCHECKLIST.SIGNATURE) {
        this.setState({ customerSignature: v.base64Content });
      } else if (Number(v.documentType) === DOCUMENTCHECKLIST.NIDFRONT) {
        this.setState({ customerNIDFRONT: v.base64Content });
      } else if (Number(v.documentType) === DOCUMENTCHECKLIST.NIDBACK) {
        this.setState({ customerNIDBACK: v.base64Content });
      } else if (Number(v.documentType) === DOCUMENTCHECKLIST.PASSPORT) {
        this.setState({ customerPASSPORT: v.base64Content });
      }
    });
  };
  componentDidMount() {
    this.convertDocumentLists();
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
                            this.state.customerPhoto !== undefined &&
                            this.state.customerPhoto !== null
                              ? `data:image/png;base64,${this.state.customerPhoto}`
                              : process.env.PUBLIC_URL + "/no-image.jpg"
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
                          return (
                            <TextBox
                              dim={v.dim}
                              id={v.id}
                              title={v.title}
                              isMandatory={v.isMandatory}
                              placeholder={v.placeholder}
                              disable={v.disable}
                              val={
                                this.state.presentAddress[v.id] !== undefined &&
                                this.state.presentAddress[v.id] !== null
                                  ? this.state.presentAddress[v.id]
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
                      {listofForth.map((v, k) => {
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
                                this.state.permanentAddress[v.id] !==
                                  undefined &&
                                this.state.permanentAddress[v.id] !== null
                                  ? this.state.permanentAddress[v.id]
                                  : "N/A"
                              }
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
                              this.state.customerNIDFRONT !== null &&
                              this.state.customerNIDFRONT !== undefined
                                ? "data:image/png;base64," +
                                  this.state.customerNIDFRONT
                                : process.env.PUBLIC_URL + "/no-img.png"
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
                              this.state.customerNIDBACK !== null &&
                              this.state.customerNIDBACK !== undefined
                                ? "data:image/png;base64," +
                                  this.state.customerNIDBACK
                                : process.env.PUBLIC_URL + "/no-img.png"
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
                              this.state.customerSignature !== null &&
                              this.state.customerSignature !== undefined
                                ? "data:image/png;base64," +
                                  this.state.customerSignature
                                : process.env.PUBLIC_URL + "/no-img.png"
                            }
                            className="rounded mx-auto d-block"
                            alt="user image"
                            width="100%"
                          />
                          <p>Signature</p>
                        </div>
                        {this.state.customerPASSPORT !== undefined &&
                        this.state.customerPASSPORT !== null ? (
                          <>
                            {" "}
                            <div
                              className="col-md-3 d-inline-block"
                              style={{ textAlign: "center" }}
                            >
                              <img
                                src={
                                  this.state.customerPASSPORT !== null &&
                                  this.state.customerPASSPORT !== undefined
                                    ? "data:image/png;base64," +
                                      this.state.customerPASSPORT
                                    : process.env.PUBLIC_URL + "/front.jpg"
                                }
                                className="rounded mx-auto d-block"
                                alt="user image"
                                width="100%"
                              />
                              <p>Owner's Passport</p>
                            </div>{" "}
                          </>
                        ) : (
                          ""
                        )}
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
