import React, { Component } from "react";

class TextBox extends Component {
  constructor(props) {
    super(props);
  }
  ChangeHandler = (e) => {
    console.log(e.target.value);
    window.NomineelInformation.transferData(e.target.id, e.target.value);
  };
  render() {
    return (
      <div className={`col-md-${this.props.dim} d-inline-block`}>
        <div className="form-group">
          <label htmlFor="fatherName">
            {this.props.title}{" "}
            {this.props.isMandatory ? (
              <span style={{ color: "red" }}>*</span>
            ) : (
              ""
            )}
          </label>

          <input
            type="text"
            className="form-control"
            id={this.props.id}
            placeholder={this.props.placeholder}
            onChange={(e) => this.ChangeHandler(e)}
            disabled={this.props.disable ? true : false}
            value={this.props.val}
            // defaultValue={values.fatherName}
          />
        </div>
      </div>
    );
  }
}
export default TextBox;