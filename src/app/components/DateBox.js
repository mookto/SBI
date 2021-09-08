import React, { Component } from "react";
import DatePicker from "react-datepicker";
class DateBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: "1989-10-04",
    };
  }
  ChangeHandler = (id) => {
    console.log("date ", id);
    let date2 = new Date(id.toISOString());
    let year = date2.getFullYear();
    let month = date2.getMonth() + 1;
    let dt = date2.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    let stringDate = year + "-" + month + "-" + dt;
    console.log(year + "-" + month + "-" + dt);
    this.setState({
      dob: stringDate,
    });
  };
  render() {
    return (
      <div className={`col-md-${this.props.dim} d-inline-block`}>
        <div className="form-group">
          <label htmlFor={this.props.title}>
            {this.props.title}{" "}
            {this.props.isMandatory ? (
              <span style={{ color: "red" }}>*</span>
            ) : (
              ""
            )}
          </label>
          <div className="input-group date">
            <DatePicker
              className="form-control"
              //selected={this.state.id}
              utcOffset={6}
              onChange={(id) => {
                this.ChangeHandler(id);
              }}
              dateFormat="Pp"
              value={this.state.dob}
              placeholderText={this.props.placeholder}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              disabled={this.props.disable ? true : false}
              required={this.props.isMandatory}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DateBox;
