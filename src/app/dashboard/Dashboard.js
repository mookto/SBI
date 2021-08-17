import React, { Component } from "react";
import { Link } from "react-router-dom";
import { instance } from "../service/ApiUrls";
import { baseURL } from "../service/ApiService";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //const loggedIn = localStorage.getItem("loggedIn");
    instance
      .get(baseURL + "/getloggedinuser")
      .then((res) => {
        if (res.data.result.error === false) {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("username", res.data.data.username);
        } else {
          localStorage.setItem("loggedIn", false);
          this.props.history.push("/banklogin");
        }
      })
      .catch((err) => {
        localStorage.setItem("loggedIn", false);
        window.location.href = "/banklogin";
      });
    // if (loggedIn === "false") {
    //   this.props.history.push("/banklogin");
    // }
  }

  render() {
    return (
      <div>
        <div className="row align-items-start proBanner mt-4">
          <div className="col-md-3 grid-margin dashboard-card">
            <Link to="/usermobile">
              <div className="card text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-2 align-items-center">
                    <h4 className="font-weight-semibold mb-0">New Customer</h4>
                    <div className="icon-holder">
                      <i
                        className="mdi mdi-account-multiple-plus"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 grid-margin dashboard-card">
            <Link to="/customer-list">
              <div className="card text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-2 align-items-center">
                    <h4 className="font-weight-semibold mb-0">Customer List</h4>
                    <div className="icon-holder">
                      <i
                        className="mdi mdi-playlist-plus"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 grid-margin dashboard-card">
            <Link to="/new-application">
              <div className="card text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-2 align-items-center">
                    <h4 className="font-weight-semibold mb-0">New Account</h4>
                    <div className="icon-holder">
                      <i
                        className="mdi mdi-plus-circle"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 grid-margin dashboard-card">
            <Link to="/account-list">
              <div className="card text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-2 align-items-center">
                    <h4 className="font-weight-semibold mb-0">Account List</h4>
                    <div className="icon-holder">
                      <i
                        className="mdi mdi-view-list"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
