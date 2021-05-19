import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { instance, nidcall } from "../ApiUrls";
import nidFront from "../components/DummyImages";
import nidBack from "../components/DummyImages";
import ownbase64 from "../components/DummyImages";

export class NidVerify extends Component {
  constructor(props) {
    super(props);
    window.fingerComponent = this;
    //let nidPics = this.props.history.location.state.nidPics;
    this.state = {
      email: "",
      phoneNo: "8801552637859",
      password: "123456",
      nid: "19962695408000058",
      dob: "20-04-1996",
      // image: nidPics.ownbase64,
      // nidFront: nidPics.nidFrontbase64,
      // nidBack: nidPics.nidBackbase64,
      image: ownbase64,
      nidFront: nidFront,
      nidBack: nidBack,
      district: "1234",
      postalcode: "1234",
    };
  }

  handleChange = (date) => {
    this.setState({
      dob: date,
    });
  };

  receiveFingerData = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              <h4 className="card-title">Add Profile Fingure-Print</h4>
              <div className="card-body">
                <div className="col-md-4  d-inline-block">
                  <div className="form-group">
                    <label htmlFor="nidno">NID Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nid_no"
                      placeholder="Enter NID Number"
                      onChange={(e) => {
                        this.setState({ nid: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-4  d-inline-block">
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <div className="input-group date">
                      <DatePicker
                        className="form-control"
                        //selected={this.state.dob}
                        onChange={this.handleChange}
                        value={this.state.dob}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4  d-inline-block">
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      style={{ padding: "10px", margin: "0px" }}
                      onClick={() => {
                        return window.captureFinger(
                          this,
                          "hfFingerData",
                          this.state
                        );
                      }}
                    >
                      Fingureprint
                    </button>
                  </div>
                </div>
                <div
                  className="col-md-12 mt-3 pb-3"
                  style={{ textAlign: "center" }}
                >
                  <button className="btn btn-light">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NidVerify;
