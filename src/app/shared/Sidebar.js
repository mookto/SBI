import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/management ", state: "managementMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center"></div>
        <ul className="nav m-t-70">
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/management") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.managementMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("managementMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-apps menu-icon"></i>
              <span className="menu-title">Management</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.managementMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/management/appuser-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/management/appuser-list"
                  >
                    <i className="mdi mdi-account-multiple menu-icon"></i> App
                    User List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/management/branch-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/management/branch-list"
                  >
                    <i className="mdi mdi-bank menu-icon"></i> Branch List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/management/atm-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/management/atm-list"
                  >
                    <i className="mdi mdi-cup menu-icon"></i> ATM List
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          {/* <li
            className={
              this.isPathActive("/management") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.managementMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("managementMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-apps menu-icon"></i>
              <span className="menu-title">Management</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.managementMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/management/appuser-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/management/appuser-list"
                  >
                    <i className="mdi mdi-account-multiple menu-icon"></i> App
                    User List
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li> */}
          <li
            className={
              this.isPathActive("/usermobile") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/usermobile">
              <i className="mdi mdi-account-multiple-plus menu-icon"></i>
              <span className="menu-title">New Customer</span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/customer-list")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/customer-list">
              <i className="mdi mdi-playlist-plus menu-icon"></i>
              <span className="menu-title">Customer List</span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/new-application")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/new-application">
              <i className="mdi mdi-plus-circle menu-icon"></i>
              <span className="menu-title">New Account</span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/account-list")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/account-list">
              <i className="mdi mdi-view-list menu-icon"></i>
              <span className="menu-title">Account List</span>
            </Link>
          </li>
          {/* <li
            className={
              this.isPathActive("/icons") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.iconsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("iconsMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-chart-bar menu-icon"></i>
              <span className="menu-title">Reports</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.iconsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/reports/success")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/reports/success"
                  >
                    eKYC Report
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/reports/branch-wise-report")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/reports/branch-wise-report"
                  >
                    Branch Wise
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/reports/product-wise-report")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/reports/product-wise-report"
                  >
                    Product Wise
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/reports/onboarding-type-report")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/reports/onboarding-type-report"
                  >
                    Onboarding Type
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/reports/ekyc-type-report")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/reports/ekyc-type-report"
                  >
                    eKYC Type
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li> */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
