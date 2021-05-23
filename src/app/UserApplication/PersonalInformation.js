import React, { Component } from "react";
import { ekycaddapi, instance } from "../ApiUrls";
import { Link } from "react-router-dom";
import Signature from "../components/Signature";
import PhotoUploader from "../components/PhotoUploader";
import PopUp from "../components/PopUp";
import Button from "react-bootstrap/Button";
import DocumentUploader from "../components/DocumentUploader";
import camera from "../user-pages/camera.js";
import { listofFirst, listofSecond } from "../components/extra.js";
const userImg1 = require("../../assets/images/dummy-img.jpg");

class CustomTextBox extends React.Component {
  ChangeHandler = (e) => {
    console.log(e.target.value);
    window.PersonalInformation.transferData(e.target.id, e.target.value);
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
            // defaultValue={values.fatherName}
          />
        </div>
      </div>
    );
  }
}

class CustomDropDownBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defalutval: props.options[0],
    };
  }
  ChangeHandler = (e) => {
    console.log(e.target.value);
    window.PersonalInformation.transferData(e.target.id, e.target.value);
  };
  render() {
    return (
      <div className="col-md-4 d-inline-block">
        <div className="form-group">
          <label htmlFor="gender">
            {this.props.title}{" "}
            {this.props.isMandatory ? (
              <span style={{ color: "red" }}>*</span>
            ) : (
              ""
            )}
          </label>

          <select
            id={this.props.id}
            className="form-control"
            disabled={this.props.disable}
            onChange={(e) => this.ChangeHandler(e)}
            value={this.state.defalutval}

            //defaultValue={window.PersonalInformation.state[this.props.id]}
            // defaultValue={values.gender}
          >
            {this.props.options.map((v, k) => {
              //console.log(v);
              return (
                <option id={v.id} value={v.value}>
                  {v.title}
                </option>
              );
            })}
          </select>
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
                      {listofFirst.map((v, k) => {
                        //console.log(v, k);
                        return (
                          <CustomTextBox
                            dim={v.dim}
                            id={v.id}
                            title={v.title}
                            isMandatory={v.isMandatory}
                            placeholder={v.placeholder}
                            disable={v.disable}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="form-header">
                    <h3 className="box-title">Personal Info</h3>
                  </div>
                  {listofSecond.map((v, k) => {
                    //console.log(v, k);
                    {
                      return v.options === null || v.options === undefined ? (
                        <CustomTextBox
                          dim={v.dim}
                          id={v.id}
                          title={v.title}
                          isMandatory={v.isMandatory}
                          placeholder={v.placeholder}
                          disable={v.disable}
                        />
                      ) : (
                        <CustomDropDownBox
                          dim={v.dim}
                          id={v.id}
                          title={v.title}
                          isMandatory={v.isMandatory}
                          placeholder={v.placeholder}
                          disable={v.disable}
                          options={v.options}
                        />
                      );
                    }
                  })}

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
