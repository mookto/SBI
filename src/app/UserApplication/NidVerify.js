import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { instance, nidcall, baseURL, errorCompute } from "../service/ApiUrls";
import nidFront from "../components/DummyImages";
import nidBack from "../components/DummyImages";
import ownbase64 from "../components/DummyImages";
import { ecData } from "../components/extra";
import Loader from "../components/Loader";
import { confirmAlert } from "react-confirm-alert";
import { makeid } from "./NewAccount";

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
      dob: "1989-10-04",
      nid: "5975092452",
      // image: nidPics.ownbase64,
      // nidFront: nidPics.nidFrontbase64,
      // nidBack: nidPics.nidBackbase64,
      // image: ownbase64,
      // nidFront: nidFront,
      // nidBack: nidBack,
      // district: "1234",
      // postalcode: "1234",
      colorButton: "red",
      loaderShow: false,
    };
  }

  getMobileNumber = () => {
    if (window.mobileNumber !== undefined) {
      this.setState({ ...window.mobileNumber.getMobileNumber() });
    }
  };

  loaderHide = () => {
    this.setState({ loaderShow: false });
  };

  componentDidMount = () => {
    // let timer = setInterval(() => {
    //   this.setState({ loaderText: makeid(5) });
    // }, 2000);

    this.getMobileNumber();
    setTimeout(() => {
      this.setState({ loaderShow: true });
    }, 1000);
    // setTimeout(() => {
    //   clearInterval(timer);
    //   this.loaderHide();
    // }, 10000);
  };

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
                      className="form-control"
                      id="nid_no"
                      placeholder="Enter NID Number"
                      onChange={(e) => {
                        this.setState({ nid: e.target.value }, () => {
                          if (
                            this.state.nid.length === 17 ||
                            this.state.nid.length === 10
                          ) {
                            let dataToSend = {
                              identficationNumber: this.state.nid,
                              identificationType: "3",
                            };
                            instance
                              .post(baseURL + "/getcustomerdata", dataToSend)
                              .then((res) => {
                                if (res.data.result.error === false) {
                                  if (res.data.data !== null) {
                                    confirmAlert({
                                      title: "Already User Exists",
                                      message: (
                                        <p className="mod-p">
                                          {" "}
                                          {res.data.data.cp.name}{" "}
                                        </p>
                                      ),
                                      buttons: [
                                        {
                                          label: "Ok",
                                          onClick: () => {},
                                        },
                                      ],
                                    });
                                  }
                                }
                              })
                              .catch((err) => errorCompute(err));
                          }
                        });
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
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
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
                            ? ""
                            : this.state.mobileNumber,
                      };
                      dataToSend[
                        this.state.nid.length === 17
                          ? "nid17Digit"
                          : "nid10Digit"
                      ] = this.state.nid;

                      //console.log("datato send ", ecData.data.success.data);

                      instance
                        .post(baseURL + "/makethefulleccall", dataToSend)
                        .then((res) => {
                          if (res.data.result.error === false) {
                            this.setState(
                              {
                                loaderShow: true,
                                loaderText: "Processing.....",
                              },
                              () => {
                                setTimeout(() => {
                                  let dataSend = {
                                    ...res.data.data,
                                  };
                                  instance
                                    .post(baseURL + "/callECVerify", dataSend)
                                    .then((res) => {
                                      if (res.data.result.error === false) {
                                        this.setState(
                                          { loaderText: res.data.data.result },
                                          () => {
                                            if (
                                              this.state.loaderText ===
                                              "MATCH FOUND"
                                            ) {
                                              setTimeout(() => {
                                                this.loaderHide();
                                                this.props.history.push({
                                                  pathname:
                                                    "/personalinformation",
                                                  state: {
                                                    mobileNumber:
                                                      dataToSend.mobileNumber,
                                                    ...res.data.data
                                                      .verificationResponse
                                                      .voterInfo,
                                                  },
                                                });
                                              }, 1000);
                                            } else if (
                                              this.state.loaderText ===
                                              "NO MATCH FOUND"
                                            ) {
                                              setTimeout(() => {
                                                this.loaderHide();
                                              }, 1000);
                                            }
                                          }
                                        );
                                      } else {
                                        this.setState(
                                          {
                                            loaderText: res.data.result.errMsg,
                                          },
                                          () => {
                                            this.loaderHide();
                                          }
                                        );
                                      }
                                    });
                                }, 2000);
                              }
                            );
                          }
                        });
                    }}
                  >
                    Submit
                  </button>
                  <Loader
                    loaderShow={this.state.loaderShow}
                    onHide={this.loaderHide}
                    loaderText={this.state.loaderText}
                  />
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
