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
                  <label htmlFor="documentType">Document Type</label>
                  <select className="form-control" id="documentType">
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
                  <label htmlFor="document">Document Name</label>
                  <input
                    type="text"
                    name="document"
                    className="form-control"
                    placeholder="Enter Document Name"
                    onChange={this.ChangeHandler}
                  />
                </div>
              </div>
              <div className="col-md-12 d-inline-block">
                <div className="form-group">
                  <label htmlFor="plainAddress">Select Document</label>
                  <div className="custom-file mb-1">
                    <input
                      type="file"
                      className="custom-file-input"
                      onChange={this.props.handleFile()}
                      id={this.props.id}
                      name={this.props.id}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor={this.props.id}
                    >
                      {this.props.fileNameToShow === undefined
                        ? "Select File"
                        : this.props.fileNameToShow}
                    </label>
                  </div>
                  <i
                    id={this.props.cross}
                    className="fa fa-times brandCross"
                    onClick={(e) => {
                      document.getElementById(this.props.id).value = null;
                      document.getElementById(this.props.cross).style.display =
                        "none";
                      this.props.parentCall();
                    }}
                    style={{
                      fontSize: "1em",
                      color: "red",
                      float: "right",
                      paddingRight: "10px",
                      display: "none",
                    }}
                  ></i>
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
