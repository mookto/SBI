import React, { Component } from "react";
import { ekycaddapi, instance } from "../ApiUrls";
import { Link } from "react-router-dom";
import Signature from "../components/Signature";
import PhotoUploader from "../components/PhotoUploader";
import PopUp from "../components/PopUp";
import Button from "react-bootstrap/Button";
import DocumentUploader from "../components/DocumentUploader";
import camera from "../user-pages/camera.js";
const userImg1 = require("../../assets/images/dummy-img.jpg");

class CustomTextBox extends React.Component {
  ChangeHandler = (e) => {
    console.log(e.target.value);
    window.PersonalInformation.transferData(e.target.id, e.target.value);
  };
  render() {
    return (
      <div className="col-md-6 d-inline-block">
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
            // defaultValue={values.fatherName}
          />
        </div>
      </div>
    );
  }
}

export class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    window.PersonalInformation = this;
    this.state = {
      firstName: "Moin",
      lastName: "tarik",
      modalShow: false,
      option1: true,
      option2: false,
      submitPhoto: false,
    };
  }
  modalShowHandler = () => {
    this.setState({ modalShow: true });
  };
  modalHideHandler = () => {
    this.setState({ modalShow: false, option1: true }, () => {
      // camera.stopCamera();
    });
  };

  transferData = (k, v) => {
    console.log(k, v);
    this.setState({ [k]: v });
  };

  ChangeHandler = (e) => {
    console.log(this.state);
  };

  submitHandler = () => {
    this.setState({ submitPhoto: true }, () => {
      camera.stopCamera();
      this.modalHideHandler();
    });
  };

  render() {
    let { nidFrontbase64 = userImg1 } =
      this.state.androidProperties !== undefined &&
      this.state.androidProperties;
    let $nidFrontView = null;
    // $imagePreview = (imagePreviewUrl)
    $nidFrontView = (
      <img
        src={
          nidFrontbase64 !== userImg1 && nidFrontbase64 !== null
            ? `data:image/jpeg;base64,${nidFrontbase64}`
            : process.env.PUBLIC_URL + "/dummy-img.jpg"
        }
        className="mx-auto d-block"
        alt="NID Front"
        style={{
          width: "100%",
          border: "1px solid #ffffff",
          maxHeight: "200px",
        }}
      />
    );
    // const { values } = this.props;
    const uploadOption = (
      <>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          How would you like to submit your Document?
        </p>
        <button
          className="btn btn-outline-info btn-lg btn-block mb-3 mt-4"
          style={{ textAlign: "left" }}
          onClick={() => {
            this.setState({ option1: false, option2: true }, () => {
              camera.startCamera();
            });
          }}
        >
          <i className="mdi mdi-camera"></i>Take Photo with webcam{" "}
          <i
            className="mdi mdi-arrow-right-bold-circle-outline"
            style={{ float: "right" }}
          ></i>
        </button>
        <button
          className="btn btn-outline-info btn-lg btn-block mb-4"
          style={{ textAlign: "left" }}
          onClick={() => {
            this.setState({ option1: false, option2: false });
          }}
        >
          <i className="mdi mdi-cloud-upload"></i>Upload photo from this device{" "}
          <i
            className="mdi mdi-arrow-right-bold-circle-outline"
            style={{ float: "right" }}
          ></i>
        </button>
      </>
    );
    const fileUpload = (
      <>
        <DocumentUploader
          name="Upload NID Front Photo"
          id="front"
          cross="nidFrontCross"
          handleLock={() => console.log("Hello")}
        />
        {$nidFrontView}
      </>
    );
    const webCam = (
      <>
        <div className="col-md-6 d-inline-block">
          <div id="web_came"></div>
        </div>
        <div
          id="web_src"
          className="col-md-6 d-inline-block"
          style={{ width: "100%", height: "auto" }}
        ></div>
        <button
          className="btn btn-danger mr-2"
          onClick={() => {
            camera.stopCamera();
            this.modalHideHandler();
          }}
        >
          Stop-Camera
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            let ownimge = camera.takeSnapshot();
            this.setState({ ownbase64: ownimge.substring(22) });
          }}
        >
          TakePictue
        </button>
      </>
    );
    const docSubmitOption = (
      <>
        {this.state.option1 === true ? (
          <>{uploadOption}</>
        ) : (
          <>{this.state.option2 === true ? <>{webCam}</> : <>{fileUpload}</>}</>
        )}
      </>
    );
    return (
      <div className="row proBanner">
        <div className="col-12">
          <div className="card">
            <h4 className="card-title">Personal Information</h4>
            <div className="card-body">
              <form>
                <div className="col-md-12">
                  <div className="row justify-content-md-center mb-2">
                    <div className="col-md-4" style={{ textAlign: "center" }}>
                      <img
                        src={
                          this.state.ownbase64 !== null &&
                          this.state.ownbase64 !== undefined &&
                          this.state.submitPhoto === true
                            ? "data:image/png;base64," + this.state.ownbase64
                            : process.env.PUBLIC_URL + "/user-image.jpg"
                        }
                        className="rounded mx-auto d-block"
                        alt="user image"
                        width="56%"
                      />
                      <button
                        type="button"
                        className="btn btn-success mt-1"
                        onClick={() => this.setState({ modalShow: true })}
                      >
                        Upload Photo
                      </button>
                    </div>
                    <div className="col-md-8">
                      <CustomTextBox
                        id="identifierNumber"
                        title="Identifier Number"
                        isMandatory
                        placeholder="Enter Identifier Number"
                        disable
                      />
                      <CustomTextBox
                        id="fullNameEn"
                        title="fullName"
                        isMandatory
                        placeholder="Enter full Name"
                        disable
                      />
                      <CustomTextBox
                        id="dob"
                        title="Date of birth"
                        isMandatory
                        placeholder="Enter date of birth"
                        disable
                      />
                      <CustomTextBox
                        id="fullNameBn"
                        title="পূর্ণনাম"
                        isMandatory
                        placeholder="পূর্ণনাম"
                        disable
                      />
                      <CustomTextBox
                        id="mobile"
                        title="Mobile Number"
                        isMandatory
                        placeholder="Mobile Number"
                        disable
                      />
                      <CustomTextBox
                        id="email"
                        title="Email"
                        placeholder="Enter E-mail"
                        disable
                      />
                    </div>
                  </div>
                  <div className="form-header">
                    <h3 className="box-title">Personal Info</h3>
                  </div>

                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="motherName">
                        Mothers Name <span style={{ color: "red" }}>*</span>
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="motherName"
                        placeholder="Enter Mothers Name"
                        onChange={this.ChangeHandler("motherName")}
                        // defaultValue={values.motherName}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="spouseName">Spouse Name</label>

                      <input
                        type="text"
                        className="form-control"
                        id="spouseName"
                        placeholder="Enter Spouse Name"
                        // onChange={this.ChangeHandler("spouseName")}
                        // defaultValue={values.spouseName}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="spouseName">
                        Nationality <span style={{ color: "red" }}>*</span>
                      </label>

                      <select
                        className="form-control"
                        disabled
                        // onChange={this.ChangeHandler("nationality")}
                        // defaultValue={values.nationality}
                      >
                        <option id="nationality" value="bangladeshi">
                          BANGLADESHI
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="birthPlace">Birth Place</label>

                      <input
                        type="text"
                        className="form-control"
                        id="birthPlace"
                        placeholder="Enter Birth Place"
                        // onChange={this.ChangeHandler("birthPlace")}
                        // defaultValue={values.birthPlace}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="gender">
                        Gender <span style={{ color: "red" }}>*</span>
                      </label>

                      <select
                        className="form-control"
                        disabled
                        // onChange={this.ChangeHandler("gender")}
                        // defaultValue={values.gender}
                      >
                        <option id="male" value="male">
                          Male
                        </option>

                        <option id="female" value="female">
                          Female
                        </option>

                        <option id="third" value="third">
                          Third
                        </option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="preferredProduct">
                        Preferred Product{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>

                      <select
                        className="form-control"
                        disabled
                        // onChange={this.ChangeHandler("preferredProduct")}
                        // defaultValue={values.preferredProduct}
                      >
                        <option id="saccount" value="saccount">
                          Saving Account
                        </option>

                        <option id="caccount" value="caccount">
                          Current Account
                        </option>

                        <option id="fdraccount" value="fdraccount">
                          FDR Account
                        </option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="districtId">Presently Resided City</label>

                      <select
                        className="form-control"
                        // onChange={this.ChangeHandler("districtId")}
                        // defaultValue={values.districtId}
                      >
                        <option id="saccount" value="saccount">
                          Resident
                        </option>

                        <option id="ctg" value="ctg">
                          Chattogram City Corporation
                        </option>

                        <option id="dhk" value="dhk">
                          Dhaka City Corporation
                        </option>

                        <option id="khl" value="khl">
                          Khulna City Corporation
                        </option>

                        <option id="nar" value="nar">
                          Narayangonj City Corporation
                        </option>

                        <option id="raj" value="raj">
                          Rajshahi City Corporation
                        </option>

                        <option id="syl" value="syl">
                          Sylhet City Corporation
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="branchId">Preferred Branch</label>

                      <select
                        className="form-control"
                        // onChange={this.ChangeHandler("branchId")}
                        // defaultValue={values.branchId}
                      >
                        <option id="gulshan" value="gulshan">
                          Branch A
                        </option>
                        <option id="gulshan" value="gulshan">
                          Branch B
                        </option>
                        <option id="gulshan" value="gulshan">
                          Branch C
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="residentStatus">Resident Status</label>

                      <select
                        className="form-control"
                        // onChange={this.ChangeHandler("residentStatus")}
                        // defaultValue={values.residentStatus}
                      >
                        <option id="resident" value="resident">
                          Resident
                        </option>

                        <option id="nonresident" value="nonresident">
                          Non-Resident
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="residentialStatus">
                        Residential Status
                      </label>

                      <select
                        className="form-control"
                        // onChange={this.ChangeHandler("residentialStatus")}
                        // defaultValue={values.residentialStatus}
                      >
                        <option id="none" value="">
                          select
                        </option>
                        <option id="own" value="own">
                          Own
                        </option>
                        <option id="rented" value="rented">
                          Rented
                        </option>
                        <option id="others" value="others">
                          Others
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="occupation">Occupation</label>

                      <select
                        className="form-control"
                        // onChange={this.ChangeHandler("occupation")}
                        // defaultValue={values.occupation}
                      >
                        <option value="">select</option>
                        <option value="service">Service</option>
                        <option value="business">Business</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="maritalStatus">
                        Marital Status <span style={{ color: "red" }}>*</span>
                      </label>

                      <select
                        className="form-control"
                        // onChange={this.ChangeHandler("maritalStatus")}
                        // defaultValue={values.maritalStatus}
                      >
                        <option id="none" value="">
                          select
                        </option>
                        <option id="married" value="married">
                          Married
                        </option>
                        <option id="singale" value="singale">
                          Singale
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="presentAddress">
                        Present Address <span style={{ color: "red" }}>*</span>
                      </label>
                      <textarea
                        type="text"
                        rows="3"
                        id="permanentAddress"
                        className="form-control"
                        // onChange={this.ChangeHandler("presentAddress")}
                        // defaultValue={values.presentAddress}
                        placeholder="Enter Present Address"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-6 d-inline-block">
                    <div className="form-group">
                      <label htmlFor="permanentAddress">
                        Permanent Address{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <textarea
                        type="text"
                        rows="3"
                        id="permanentAddress"
                        className="form-control"
                        // onChange={this.ChangeHandler("permanentAddress")}
                        // defaultValue={values.permanentAddress}
                        placeholder="Enter Permanent Address"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row justify-content-md-center">
                    <div className="col-md-12">
                      <div className="form-header">
                        <h3 className="box-title">Signature</h3>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <Signature
                        fname={this.state.firstName}
                        lname={this.state.lastName}
                        capturefuncName={window.capture}
                        clearfuncName={window.clearSignature}
                      />
                    </div>
                    <div className="col-md-6">
                      <PhotoUploader />
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 mt-3 pb-3"
                  style={{ textAlign: "center" }}
                >
                  <Link to="/nominee-information">
                    <button
                      className="btn btn-success"
                      onClick={this.saveAndContinue}
                    >
                      {" "}
                      Save And Continue
                    </button>
                  </Link>
                </div>
              </form>
              <PopUp
                modalShow={this.state.modalShow}
                onHide={this.modalHideHandler}
                modalHideHandler={this.modalHideHandler}
                modalHeading="Document Upload"
                modalBody={docSubmitOption}
                submitHandler={() => {
                  this.submitHandler();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
