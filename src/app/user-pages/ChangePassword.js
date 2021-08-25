import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import Loader from "../components/Loader";
import { instance } from "../service/ApiUrls";
import { baseURL } from "../service/ApiService";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { loaderShow: false };
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  callChangePassword = () => {
    instance
      .put(baseURL + "/user-list/change-password", this.state)
      .then((res) => {
        if (res.data.result.error === false) {
          confirmAlert({
            title: "Password Changed",
            message: (
              <p className="mod-p"> {"Please re-login with new password"} </p>
            ),
            buttons: [
              {
                label: "Ok",
                onClick: () => {
                  localStorage.setItem("loggedIn", false);
                  this.props.history.push("/banklogin");
                },
              },
            ],
            closeOnClickOutside: false,
          });
        } else {
          confirmAlert({
            title: "Error Message",
            message: <p className="mod-p"> {res.data.result.errorMsg} </p>,
            buttons: [
              {
                label: "Ok",
                onClick: () => {},
              },
            ],
            closeOnClickOutside: false,
          });
        }
      })
      .catch((err) => {});
  };

  render() {
    return (
      <div>
        <div className="row justify-content-center mt-3">
          <div
            className="col-3"
            style={{
              borderRight: "1px dotted gray",
              marginRight: "10px",
            }}
          >
            <div className="page-header">
              <h3 className="page-title"> Change Password</h3>
            </div>
            <p style={{}}>
              {" "}
              In order to <b>protect your account,</b> make sure your password:
            </p>
            <p>
              <i className="fa fa-check mr-1"></i>At least 6 characters
            </p>
            <p>
              <i className="fa fa-check mr-1"></i>At least 1 upper case letter
              (A-Z){" "}
            </p>
            <p>
              <i className="fa fa-check mr-1"></i>At least 1 lower case letter
              (a-z){" "}
            </p>
            <p>
              <i className="fa fa-check mr-1"></i>At least 1 number (0-9)
            </p>
            {/* <p>
              <i className="fa fa-check mr-1"></i>Don't use last used password
            </p> */}
            <p>
              <i className="fa fa-check mr-1"></i>Don't use your username or
              email
            </p>
          </div>
          <div className="col-4">
            <form className="pt-2">
              <p style={{ fontWeight: "bold" }}>
                Please fillup below Information:
              </p>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="oldPassword"
                  name="currentPassword"
                  onChange={this.handleOnChange}
                  placeholder="Enter Old Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="newPassword"
                  name="newPasswordSt"
                  onChange={this.handleOnChange}
                  placeholder="Enter New Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="confirmPassword"
                  name="confirmedPasswordSt"
                  onChange={this.handleOnChange}
                  placeholder="Enter Confirm Password"
                />
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-block btn-success btn-lg font-weight-medium auth-form-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(this.state);
                    this.callChangePassword();
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Loader
          loaderShow={this.state.loaderShow}
          onHide={this.loaderHideHandler}
          loaderHideHandler={this.loaderHideHandler}
        />
      </div>
    );
  }
}

export default ChangePassword;
