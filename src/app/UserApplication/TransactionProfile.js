import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tpInfo } from "../components/extra.js";
import TextBox from "../components/TextBox";

export class TransactionProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    if (this.props.fromaccordian === true) {
      this.props.handle(e.target.id, e.target.value);
    }
  };
  render() {
    const accountOwnerForm = (
      <>
        <div className="col-md-6 d-inline-block">
          <div className="form-group">
            <label htmlFor="identityType">Identification Type</label>

            <select className="form-control" onChange={this.props.handleChange}>
              <option value="nid">National ID</option>
              <option value="passport">Passport</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 d-inline-block">
          <div className="form-group">
            <label htmlFor="name">Identification Number</label>

            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Number"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              {this.props.titleToShow !== undefined &&
              this.props.titleToShow === false ? (
                ""
              ) : (
                <h4 className="card-title">Transaction Profile</h4>
              )}
              <div className="card-body">
                <div className="row justify-content-md-center">
                  {tpInfo.map((v, k) => {
                    //console.log(v, k);
                    return (
                      <TextBox
                        dim={v.dim}
                        id={v.id}
                        title={v.title}
                        isMandatory={v.isMandatory}
                        placeholder={v.placeholder}
                        disable={v.disable}
                        val={v.val}
                        fromaccordian={this.props.fromaccordian}
                        handleChange={this.handleChange}
                      />
                    );
                  })}
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
export default TransactionProfile;
