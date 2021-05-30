import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "../../assets/styles/signup.css";
import { login } from "../service/ApiService";
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
      error: false,
      errorMessage: "Someting Worng!",
    };
    //camera.startCamera();
  }

  componentDidMount() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      this.props.history.push({ pathname: "/dashboard" });
    }
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
      this.setState({ error: true, errorMessage: "Username can't be Empty" });
      // alert("Username can't be empty");
      return;
    }
    if (this.state.password === "") {
      this.setState({ error: true, errorMessage: "Password can't be Empty" });
      // alert("Username can't be empty");
      return;
    }
    let params = {
      username: this.state.username,
      password: this.state.password,
    };
    let config = { headers: {} };
    // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    //axios.defaults.withCredentials = true;
    this.setState({ isLoading: true }, () => {
      login(params.username, params.password, (response) => {
        console.log("response", response);

        const {
          data,
          config: { url },
          status,
        } = response;
        //console.log("status", status, "data", data);
        if (status !== 200) {
          this.setState(
            {
              username: "",
              password: "",
              error: true,
              toDashboard: false,
              isLoading: false,
              errorMessage: "Worng Username or Password !",
            },
            () => {
              localStorage.setItem("loggedIn", false);
              this.props.history.push("/banklogin");
            }
          );
        } else if (status === 200) {
          this.setState(
            { error: false, toDashboard: true, isLoading: false },
            () => {
              localStorage.setItem("loggedIn", true);
              localStorage.setItem("username", "user1");
              // this.props.history.push("/dashboard");
              window.location.href = process.env.PUBLIC_URL + "/dashboard";
            }
          );
        }
      });
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
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <div className="row justify-content-md-center">
                        <div className="form-group col-md-8 mb-0">
                          <div
                            className={
                              this.state.error === true
                                ? "alert alert-danger fade show"
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          // minlength="10"
                          // maxlength="10"
                          name="username"
                          className="form-control"
                          placeholder="Username"
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
                          className="btn btn-success"
                          style={{ padding: "10px 35px", borderRadius: "25px" }}
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
                        {/* <Link className="sign-btn" to="/dashboard">
                          forgot password?{" "}
                        </Link> */}
                        {/* <Link className="signup" to="/signup">
                          Sign Up
                        </Link> */}
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
