import React, { Component } from "react";

export class CusFileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="col-md-12">
          <div className="row justify-content-md-center">
            <div
              className="col-md-6"
              style={{ border: "1px dotted black", padding: " 15px 10px" }}
            >
              <div className="col-md-6 d-inline-block">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">
                    Document Type
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>NID Front</option>
                    <option>NID Back</option>
                    <option>Passport</option>
                    <option>TIN Certificate</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 d-inline-block">
                <div className="form-group">
                  <label htmlFor="plainAddress">Document Name</label>
                  <input
                    type="text"
                    name="otp"
                    className="form-control"
                    placeholder="Enter OTP"
                    onChange={this.ChangeHandler}
                  />
                </div>
              </div>
              <div className="col-md-12 d-inline-block">
                <div className="form-group">
                  <label htmlFor="plainAddress">Select Document</label>
                  <input
                    type="file"
                    name="otp"
                    className="form-control"
                    placeholder="Enter OTP"
                    onChange={this.ChangeHandler}
                  />
                </div>
              </div>
              <div className="col-md-12 d-inline-block text-center mt-3">
                <button type="submit" className="btn btn-success">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CusFileUpload;
