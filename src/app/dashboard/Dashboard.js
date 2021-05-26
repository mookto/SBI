import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <Link to="">
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
            <Link to="">
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
            <Link to="">
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

