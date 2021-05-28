import React, { Component } from "react";
import { Link } from "react-router-dom";
import CusAccordion from "../components/CusAccordion";
import questions from "../pages/data";
import "../../assets/styles/index.css";

class NewApplication extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="row proBanner">
        <div className="col-12">
          <div className="card">
            <h4 className="card-title">New Application</h4>
            <div className="card-body">
              <section className="info">
                {questions.map((question) => (
                  <CusAccordion key={question.id} {...question} />
                ))}
              </section>
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
