import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { instance, nidcall, baseURL } from "../service/ApiUrls";
import nidFront from "../components/DummyImages";
import nidBack from "../components/DummyImages";
import ownbase64 from "../components/DummyImages";
import { ecData } from "../components/extra";

export class NidVerify extends Component {
  constructor(props) {
    super(props);
    window.fingerComponent = this;
    //let nidPics = this.props.history.location.state.nidPics;
    this.state = {
      ...props.location.state,
      // email: "",
      // phoneNo: "8801552637859",
      // password: "123456",
      // nid: "19962695408000058",
      dob: "1996-04-20",
      // image: nidPics.ownbase64,
      // nidFront: nidPics.nidFrontbase64,
      // nidBack: nidPics.nidBackbase64,
      // image: ownbase64,
      // nidFront: nidFront,
      // nidBack: nidBack,
      // district: "1234",
      // postalcode: "1234",
      colorButton: "red",
    };
  }

  handleChange = (date) => {
    console.log("date ", date.toISOString().substring(0, 10));
    this.setState({
      dob: date.toISOString().substring(0, 10),
    });
  };

  receiveFingerData = (data) => {
    console.log(data);
    this.setState({ ...data });
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
                      type="number"
                      maxlength="4"
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
                        dateFormat="Pp"
                        value={this.state.dob}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4  d-inline-block">
                  <div className="form-group">
                    <button
                      className={
                        this.state.colorButton === "red"
                          ? "btn btn-primary primary-b"
                          : "btn btn-primary primary-c"
                      }
                      style={{
                        padding: "10px",
                        margin: "0px",
                      }}
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
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      let dataToSend = {
                        dateOfBirth: this.state.dob,
                        fingerEnums: [
                          "RIGHT_THUMB",
                          "RIGHT_INDEX",
                          "LEFT_THUMB",
                          "LEFT_INDEX",
                        ],
                        listoffingers: this.state.listoffingers,
                        mobileNumber:
                          this.state.mobileNumber === undefined ||
                          this.state.mobileNumber === null
                            ? "01552637870"
                            : this.state.mobileNumber,
                      };
                      dataToSend[
                        this.state.nid.length === 17
                          ? "nid17Digit"
                          : "nid10Digit"
                      ] = this.state.nid;

                      console.log("datato send ", ecData.data.success.data);
                      instance
                        .post(baseURL + "/checkcustomerdata", dataToSend)
                        .then((res) => {
                          if (res.data.result.error === false) {
                            this.props.history.push({
                              pathname: "/personalinformation",
                              state: {
                                mobileNumber: dataToSend.mobileNumber,
                                ...ecData.data.success.data.verificationResponse
                                  .voterInfo,
                              },
                            });
                          }
                        });
                    }}
                  >
                    Submit
                  </button>
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
