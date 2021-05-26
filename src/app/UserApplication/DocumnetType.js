import React, { Component } from "react";
import { Link } from "react-router-dom";
export class DocumnetType extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "nid" };
  }
  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              <h4 className="card-title">Open Account List</h4>
              <div className="card-body">
                <div class="row justify-content-md-center">
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label for="documnet_type">Select Document Type</label>
                      <select
                        className="form-control"
                        id="documnet_type"
                        onChange={this.onChangeHandler}
                      >
                        <option value="nid">National Id Card</option>
                        <option value="passport">Passport</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <Link
                        to={
                          this.state.value === "nid"
                            ? "nid-verify"
                            : "passport-information"
                        }
                      >
                        {" "}
                        <button className="btn btn-primary btn-block">
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
