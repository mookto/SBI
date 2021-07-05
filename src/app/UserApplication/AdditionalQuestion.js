import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tpInfo } from "../components/extra.js";
import TextBox from "../components/TextBox";

export class AdditionalQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    if (this.props.fromaccordian === true) {
      this.props.handle(e.target.id, e.target.value);
    }
  };
  onValueChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div className="row proBanner mt-3">
          <div className="col-12">
            <div className="card">
              {this.props.titleToShow !== undefined &&
              this.props.titleToShow === false ? (
                ""
              ) : (
                <h4 className="card-title">Additional Question</h4>
              )}
              <div className="card-body">
                <div className="row justify-content-md-start pl-2">
                  <p className="cus-p">
                    <b>1.</b> Has UNSCRs check done?{" "}
                    <div className="form-check-inline ml-2">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="unscr"
                          className="form-check-input"
                          value="yes"
                          //   checked={this.state.selectedOption === "yes"}
                          onChange={this.onValueChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="unscr"
                          className="form-check-input"
                          value="no"
                          //   checked={this.state.selectedOption === "no"}
                          onChange={this.onValueChange}
                        />
                        No
                      </label>
                    </div>
                  </p>
                  <p className="cus-p">
                    <b>2.</b> Has risk grading done?{" "}
                    <div className="form-check-inline ml-2">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="risk"
                          className="form-check-input"
                          value="yes"
                          //   checked={this.state.selectedOption === "yes"}
                          onChange={this.onValueChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="risk"
                          className="form-check-input"
                          value="no"
                          //   checked={this.state.selectedOption === "no"}
                          onChange={this.onValueChange}
                        />
                        No
                      </label>
                    </div>{" "}
                    (If assessed risk high then conduct EDD as per BFIU
                    circular.)
                  </p>
                  <p className="cus-p">
                    <b>3.</b> Is the customer is IPs/PEPs?{" "}
                    <div className="form-check-inline ml-2">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="peps"
                          className="form-check-input"
                          value="yes"
                          //   checked={this.state.selectedOption === "yes"}
                          onChange={this.onValueChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="peps"
                          className="form-check-input"
                          value="no"
                          //   checked={this.state.selectedOption === "no"}
                          onChange={this.onValueChange}
                        />
                        No
                      </label>
                    </div>{" "}
                    (If client is PEPs or IPs with higher risk, then conduct EDD
                    as per BFIU circular. )
                  </p>
                  <p className="cus-p">
                    <b>4.</b> Is there any adverse media news against the
                    customer?{" "}
                    <div className="form-check-inline ml-2">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="adverse"
                          className="form-check-input"
                          value="yes"
                          //   checked={this.state.selectedOption === "yes"}
                          onChange={this.onValueChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="adverse"
                          className="form-check-input"
                          value="no"
                          //   checked={this.state.selectedOption === "no"}
                          onChange={this.onValueChange}
                        />
                        No
                      </label>
                    </div>{" "}
                    (If any then conduct EDD. )
                  </p>
                  <p className="cus-p">
                    <b>5.</b> Has the source of fund verified/justified?{" "}
                    <div className="form-check-inline ml-2">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="verified"
                          className="form-check-input"
                          value="yes"
                          //   checked={this.state.selectedOption === "yes"}
                          onChange={this.onValueChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="verified"
                          className="form-check-input"
                          value="no"
                          //   checked={this.state.selectedOption === "no"}
                          onChange={this.onValueChange}
                        />
                        No
                      </label>
                    </div>
                  </p>
                  <p className="cus-p">
                    <b>6.</b> Has the beneficial ownership checked?{" "}
                    <div className="form-check-inline ml-2">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="beneficial"
                          className="form-check-input"
                          value="yes"
                          //   checked={this.state.selectedOption === "yes"}
                          onChange={this.onValueChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="beneficial"
                          className="form-check-input"
                          value="no"
                          //   checked={this.state.selectedOption === "no"}
                          onChange={this.onValueChange}
                        />
                        No
                      </label>
                    </div>{" "}
                    (If there any beneficial owner found, then conduct CDD on
                    beneficial owner. If beneficial owner is PEPs, then conduct
                    EDD. )
                  </p>
                  {/* <p className="cus-p">
                    <b>7.</b> Are any other documents obtained{" "}
                    <div className="form-check-inline ml-2">
                      <input
                        type="text"
                        name="obtained"
                        id="obtained"
                        className="form-check-input"
                        placeholder="Enter here"
                        onChange={() => this.handleChange}
                      />
                    </div>
                  </p> */}
                  {/* <p className="cus-p">
                    <b>8.</b> Nominee details{" "}
                    <div className="form-check-inline ml-2">
                      <input
                        type="text"
                        name="nomineeDetails"
                        id="nomineeDetails"
                        className="form-check-input"
                        placeholder="Enter here"
                        onChange={() => this.handleChange}
                      />
                    </div>
                  </p> */}
                  {/* <p className="cus-p">
                    <b>8.</b> Has review of customer profile done (existing
                    customer)?{" "}
                    <div className="form-check-inline ml-2">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="prfileDone"
                          className="form-check-input"
                          value="yes"
                          //   checked={this.state.selectedOption === "yes"}
                          onChange={this.onValueChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          name="prfileDone"
                          className="form-check-input"
                          value="no"
                          //   checked={this.state.selectedOption === "no"}
                          onChange={this.onValueChange}
                        />
                        No
                      </label>
                    </div>
                    if so, date of review
                    <div className="form-check-inline ml-2">
                      <input
                        type="date"
                        name="nomineeDetails"
                        id="nomineeDetails"
                        className="form-check-input"
                        placeholder="Enter Date"
                        onChange={() => this.handleChange}
                      />
                    </div>
                  </p>
                  <p className="cus-p">
                    <b>9.</b> What is the average range and usual pattern of
                    customer transaction (over 6/12 months)?{" "}
                    <div className="form-check-inline ml-2">
                      <input
                        type="text"
                        name="averageRange"
                        id="averageRange"
                        className="form-check-input"
                        placeholder="Enter here"
                        onChange={() => this.handleChange}
                      />
                    </div>
                  </p> */}
                  {/* <p className="cus-p">
                    <b>11.</b> Any other relevant field may be add here{" "}
                    <div className="form-check-inline ml-2">
                      <input
                        type="text"
                        name="otherField"
                        id="otherField"
                        className="form-check-input"
                        placeholder="Enter here"
                        onChange={() => this.handleChange}
                      />
                    </div>
                    An efficient
                  </p> */}
                </div>
                {this.props.fromaccordian !== undefined &&
                this.props.fromaccordian === false ? (
                  <div
                    className="col-md-12 mt-3"
                    style={{ textAlign: "center" }}
                  >
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        console.log();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdditionalQuestion;
