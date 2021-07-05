import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "../../assets/styles/signup.css";
import { otpVerify, instance } from "../service/ApiUrls";

const logo = "%PUBLIC_URL%/";
export class Otp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }
  ChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="container main">
          <img
            className="center"
            src={process.env.PUBLIC_URL + "/gib-logo.jpg"}
            alt="logo"
          />
          <div className="register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img
                  className="center"
                  src={process.env.PUBLIC_URL + "/logo-dbs-black.png"}
                  alt="logo"
                  width="170px"
                />
                <h4 style={{ color: "#000000" }}>Welcome to</h4>
                <p style={{ color: "#000000" }}>Digital Banking System!</p>
              </div>
              <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                  <h3 className="register-heading">OTP</h3>
                  <div className="row register-form">
                    <div className="col-md-8 offset-md-2">
                      <div className="form-group">
                        <input
                          type="text"
                          name="otp"
                          className="form-control"
                          placeholder="Enter OTP"
                          onChange={this.ChangeHandler}
                        />
                      </div>
                      <Link
                        style={{
                          float: "right",
                          paddingBottom: "10px",
                          fontSize: "14px",
                        }}
                        id="resent"
                      >
                        Resend OTP
                      </Link>
                    </div>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <div className="form-group">
                        <button
                          type="button"
                          className="btnotp"
                          onClick={() => {
                            let data = {
                              otpId: this.props.location.state.otpId.otpId,
                              otpNumber: this.state.otp,
                            };
                            instance.post(otpVerify, data).then((res) => {
                              if (res.data.isError === false) {
                                if (
                                  this.props.location.state.from === "signin"
                                ) {
                                  this.props.history.push("/dashboard");
                                } else {
                                }
                              }
                            });
                          }}
                        >
                          Submit
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

export default Otp;
