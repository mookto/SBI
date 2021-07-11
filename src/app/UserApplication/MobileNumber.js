import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/signup.css";
import axios from "axios";
import { instance, baseURL, errorCompute } from "../service/ApiUrls";
import { confirmAlert } from "react-confirm-alert";
const logo = "%PUBLIC_URL%/";

export class MobileNumber extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isLoading: false,
      error: false,
      errorMessage: "Someting Worng!",
    };
    window.mobileNumber = this;
    this.state = {};
  }
  getMobileNumber = () => {
    let data = { mobile: this.state.mobileNumber };
    return data;
  };
  ChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  checkMobileExists = () => {
    instance
      .post(
        baseURL +
          "/getCustomerByPropertyValue?property=mobile&value=" +
          this.state.mobileNumber
      )
      .then((res) => {
        if (res.data.result.error === false) {
          if (res.data.data === null) {
            this.callOtpGen();
          } else {
            this.setState({ isLoading: false }, () => {
              confirmAlert({
                title: "Message",
                message: <p className="mod-p"> {"User Already Exists"} </p>,
                buttons: [
                  {
                    label: "Ok",
                    onClick: () => {},
                  },
                ],
              });
            });
          }
        } else {
          this.setState({ isLoading: false }, () => {
            confirmAlert({
              title: "Message",
              message: <p className="mod-p"> {"User Already Exists"} </p>,
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
      .catch((err) => {
        console.log(err);
      });
  };
  callOtpGen = () => {
    let datatoSend = {
      phone: this.state.mobileNumber,
      email: "",
      otpType: "1",
    };

    instance
      .post(baseURL + "/api/otpgen", datatoSend)
      .then((res) => {
        if (res.data.result.error === false) {
          this.setState({ isLoading: false }, () => {
            localStorage.setItem("mobile", this.state.mobileNumber);
            this.props.history.push({
              pathname: "/user-otp",
              //search: '?query=abc',
              state: {
                mobileNumber: this.state.mobileNumber,
                otpDetails: res.data.data,
              },
            });
          });
        } else if (res.data.result.error === true) {
          this.setState({
            error: true,
            errorMessage: res.data.result.errorMsg,
          });
        }
      })
      .catch((err) => {
        errorCompute(err);
      });
  };

  render() {
    return (
      <div>
        <div className="container main">
          <div className="register">
            <div className="row">
              <div className="col-md-2 register-left">
                {/* <img
                  className="center"
                  src={process.env.PUBLIC_URL + "/logo-dbs.png"}
                  alt="logo"
                  width="170px"
                /> */}
                {/* <h3>Welcome to</h3>
                <p>Digital Banking System!</p> */}
              </div>
              <div className="col-md-10 register-right">
                <div className="tab-content" id="myTabContent">
                  <h3 className="register-heading">Mobile Number</h3>
                  <div className="row register-form">
                    <div className="form-group col-md-8 mb-0">
                      <div
                        className={
                          this.state.error === true
                            ? "alert alert-danger alert-dismissible fade show"
                            : "d-none"
                        }
                        role="alert"
                      >
                        <p style={{ fontSize: "16px", marginBottom: "0px" }}>
                          {this.state.errorMessage}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-8 offset-md-2">
                      <div className="form-group">
                        <input
                          type="text"
                          name="mobileNumber"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                          onChange={this.ChangeHandler}
                        />
                      </div>
                    </div>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <div className="form-group">
                        <button
                          type="button"
                          className="btn btn-success"
                          style={{ padding: "5px 20px", borderRadius: "20px" }}
                          onClick={() => {
                            this.setState({ isLoading: true }, () => {});
                          }}
                          disabled={this.state.isLoading}
                        >
                          {this.state.isLoading ? (
                            <span>
                              <i className="fa fa-spinner fa-spin mr-3"></i>
                              Submiting...
                            </span>
                          ) : (
                            "Submit"
                          )}{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNumber;
