import React, { Component } from "react";
import { Link } from "react-router-dom";
import CusAccordion from "../components/CusAccordion";
import CusAccordions from "../components/CusAccordions";
import questions from "../pages/data";
import "../../assets/styles/index.css";
import NomineeInformation from "./NomineeInformation";
import allInAccordians from "../pages/data";

class NewApplication extends Component {
  constructor() {
    super();
    this.state = {};
  }
  setExpanded = () => {
    this.setState({ expanded: true });
  };
  setData = (obj) => {
    this.setState({ [obj.id]: obj.value });
  };
  render() {
    return (
      <div className="row proBanner">
        <div className="col-12">
          <div className="card">
            <h4 className="card-title">New Application</h4>
            <div className="card-body">
              {/*  */}
              {allInAccordians.map((v, k) => {
                return (
                  <CusAccordions
                    title={v.title}
                    info={v.info}
                    setExpanded={this.setExpanded}
                    component={v.component}
                    setData={this.setData}
                  />
                );
              })}
              <div className="col-md-12 mt-5" style={{ textAlign: "center" }}>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    console.log();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewApplication;
