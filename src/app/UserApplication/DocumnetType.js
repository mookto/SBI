import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IDENTITYTYPE, IDENTITYLIST } from "../Enum";

export class DocumnetType extends Component {
  constructor(props) {
    super(props);
    const getMobile = localStorage.getItem("mobile");
    this.state = { value: IDENTITYLIST[0], mobile: getMobile };
  }
  onChangeHandler = (e) => {
    console.log(e.target);
    this.setState({ value: JSON.parse(e.target.value) });
  };
  render() {
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              <h4 className="card-title">Open Account List</h4>
              <div className="card-body">
                <div className="row justify-content-md-center">
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label for="documnet_type">Select Document Type</label>
                      <select
                        className="form-control"
                        id="documnet_type"
                        onChange={this.onChangeHandler}
                      >
                        {IDENTITYLIST.map((v, k) => {
                          return (
                            <option
                              key={v.name + "_" + k}
                              name={v.name}
                              value={JSON.stringify(v)}
                            >
                              {v.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <Link
                        to={{
                          pathname:
                            this.state.value.value === IDENTITYLIST[0].value
                              ? "nid-verify"
                              : "passport-information",
                          state: {
                            mobileNumber: this.state.mobile,
                          },
                        }}
                      >
                        {" "}
                        <button className="btn btn-success btn-block">
                          Apply
                        </button>
                      </Link>
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
export default DocumnetType;
