import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/signup.css";
import axios from "axios";
import { instance, baseURL, errorCompute } from "../service/ApiUrls";
const logo = "%PUBLIC_URL%/";

export class MobileNumber extends Component {
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
          <div className="register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img
                  className="center"
                  src={process.env.PUBLIC_URL + "/logo-dbs.png"}
                  alt="logo"
                  width="170px"
                />
                <h3>Welcome to</h3>
                <p>Digital Banking System!</p>
              </div>
              <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                  <h3 className="register-heading">Mobile Number</h3>
                  <div className="row register-form">
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
                          className="btnotp"
                          onClick={() => {
                            let datatoSend = {
                              phone: this.state.mobileNumber,
                              email: "",
                              otpType: "1",
                            };

                            instance
                              .post(baseURL + "/api/otpgen", datatoSend)
                              .then((res) => {
                                if (res.data.result.error === false) {
                                  this.props.history.push({
                                    pathname: "/user-otp",
                                    //search: '?query=abc',
                                    state: {
                                      mobileNumber: this.state.mobileNumber,
                                      otpDetails: res.data.data,
                                    },
                                  });
                                } else {
                                }
                              })
                              .catch((err) => {
                                errorCompute(err);
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

export default MobileNumber;
