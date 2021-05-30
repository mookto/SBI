import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/signup.css";
import Countdown from "react-countdown";
import { instance, baseURL, errorCompute } from "../service/ApiUrls";
const logo = "%PUBLIC_URL%/";

export class UserOtp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.location.state,
      error: false,
      errorMessage: "Someting Worng!",
    };
  }
  ChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  componentDidMount() {}

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
                />
                <h3>Welcome to</h3>
                <p>Digital Banking System!</p> */}
              </div>
              <div className="col-md-10 register-right">
                <div className="tab-content" id="myTabContent">
                  <h3 className="register-heading">Mobile OTP</h3>
                  <div className="row register-form">
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <div className="row justify-content-md-center">
                        <div className="form-group col-md-8 mb-0">
                          <div
                            className={
                              this.state.error === false
                                ? "alert alert-danger alert-dismissible fade show"
                                : "d-none"
                            }
                            role="alert"
                          >
                            <p
                              style={{ fontSize: "16px", marginBottom: "0px" }}
                            >
                              {this.state.errorMessage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      <div style={{ float: "right" }}>
                        <Countdown date={Date.now() + 60000}>
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
                        </Countdown>
                      </div>
                    </div>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <div className="form-group">
                        {/* <Link to="/add-profile"> */}
                        <button
                          type="button"
                          className="btnotp"
                          onClick={() => {
                            let dataToSend = {
                              otpId: this.state.otpDetails.otpId,
                              otpNumber: this.state.otp,
                            };
                            instance
                              .post(baseURL + "/api/otpverify", dataToSend)
                              .then((res) => {
                                if (res.data.result.error === false) {
                                  this.props.history.push({
                                    pathname: "/document-type",
                                    //search: '?query=abc',
                                    state: {
                                      mobileNumber: this.state.mobileNumber,
                                    },
                                  });
                                } else {
                                  this.setState({ errorMessage: true });
                                }
                              })
                              .catch((err) => errorCompute(err));
                          }}
                        >
                          Submit
                        </button>
                        {/* </Link> */}
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

export default UserOtp;
