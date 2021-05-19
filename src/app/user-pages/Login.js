import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "../../assets/styles/signup.css";
import { login, otpgen, instance } from "../ApiUrls";
import axios from "axios";
import camera from "./camera.js";
const logo = "%PUBLIC_URL%/";
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      isLogin: false,
      isRedirect: false,
      isLoading: false,
    };
    //camera.startCamera();
  }
  ChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  loginButtonAction = () => {
    if (this.state.username === "") {
      alert("Username can't be empty");
      return;
    }
    if (this.state.password === "") {
      alert("Username can't be empty");
      return;
    }
    let params = {
      username: this.state.username,
      password: this.state.password,
    };
    let config = { headers: {} };
    // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    //axios.defaults.withCredentials = true;
    this.setState({ isLoading: true });
    instance.post(login, null, { params }).then((res) => {
      if (res.data.isError === false) {
        localStorage.setItem("user", res.data.returnObject);
        let datatoOtpGen = {
          email: "",
          phone: "",
          otpType: 2,
        };
        if (this.validateEmail(this.state.username)) {
          datatoOtpGen["email"] = this.state.username;
        }
        if (/^[0-9]{11}$/.test(this.state.username)) {
          datatoOtpGen["phone"] = this.state.username;
        }

        instance
          .post(otpgen, datatoOtpGen, { withCredentials: true })
          .then((res) => {
            if (res.data.isError === false) {
              this.setState({ isLoading: false });
              this.props.history.push({
                pathname: "/otp",
                state: {
                  otpId: res.data.returnObject,
                  from: "signin",
                },
              });
            }
          });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container main">
          {" "}
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
                  <h3 className="register-heading">Sign In</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          // minlength="10"
                          // maxlength="10"
                          name="username"
                          className="form-control"
                          placeholder="Phone Number/ Email *"
                          onChange={this.ChangeHandler}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={this.ChangeHandler}
                        />
                      </div>
                    </div>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <div className="form-group">
                        <button
                          type="button"
                          className="btn btn-light"
                          style={{ padding: "14px 42px" }}
                          onClick={() => {
                            this.loginButtonAction();
                            //camera.takeSnapshot();
                          }}
                          disabled={this.state.isLoading}
                        >
                          {this.state.isLoading ? (
                            <span>
                              <i className="fa fa-spinner fa-spin mr-3"></i>
                              Signing...
                            </span>
                          ) : (
                            "Sign In"
                          )}{" "}
                        </button>
                        {/* <button
                          type="button"
                          className="btnlogin"
                          onClick={() => {
                            //this.loginButtonAction();
                            //camera.stopCamera();
                          }}
                        >
                          Stop Camera
                        </button> */}
                      </div>
                    </div>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <div className="form-group">
                        <Link className="sign-btn" to="/dashboard">
                          forgot password?{" "}
                        </Link>
                        <Link className="signup" to="/signup">
                          Sign Up
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

export default Login;
