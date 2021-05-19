import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/signup.css";
import Countdown from "react-countdown";
const logo = "%PUBLIC_URL%/";

export class UserOtp extends Component {
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
                  <h3 className="register-heading">Mobile OTP</h3>
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
                      <div style={{ float: "right" }}>
                        <Countdown date={Date.now() + 30000}>
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
                        <Link to="/add-profile">
                          <button type="button" className="btnotp">
                            Submit
                          </button>
                        </Link>
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
