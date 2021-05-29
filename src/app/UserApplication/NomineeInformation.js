import React, { Component } from "react";
import { ekycaddapi, instance, baseURL } from "../service/ApiUrls";

import PopUp from "../components/PopUp";
import DocumentUploader from "../components/DocumentUploader";
import camera from "../user-pages/camera.js";
import { nomineeInfo, convertecDataToPI } from "../components/extra.js";
import CustomTable from "../components/CustomTable";
const userImg1 = require("../../assets/images/dummy-img.jpg");

class CustomTextBox extends React.Component {
  constructor(props) {
    super(props);
    window.NomineelInformation.transferData(props.id, props.val);
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

class CustomDropDownBox extends React.Component {
  constructor(props) {
    super(props);
    window.NomineelInformation.transferData(props.id, props.options[0].value);
  }
  ChangeHandler = (e) => {
    console.log(e.target.value);
    window.NomineelInformation.transferData(e.target.id, e.target.value);
  };
  render() {
    return (
      <div className={`col-md-${this.props.dim} d-inline-block`}>
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

export class NomineeInformation extends Component {
  constructor(props) {
    super(props);
    window.nomineelInformation = this;

    // let splittedName = convertedData.fullNameEn.split(" ", 2);
    this.state = {
      modalShow: false,
      option1: true,
      option2: false,
      submitPhoto: false,
      name: "",
      dob: "",
      relationship: "",
      identifierNumber: "",
      identifierType: 3,
      sharePercentage: 100.0,
      photobase64: null,
    };
    this._handlePhoto = this._handlePhoto.bind(this);
  }
  modalShowHandler = () => {
    this.setState({ modalShow: true });
  };
  modalHideHandler = () => {
    this.setState({ modalShow: false, option1: true }, () => {
      // camera.stopCamera();
    });
  };

  nomineeData = () => {
    let data = this.state;
    return data;
  };

  transferData = (k, v) => {
    //console.log(k, v);
    this.setState({ [k]: v });
  };

  ChangeHandler = (e) => {
    //console.log(this.state);
  };

  submitHandler = () => {
    if (
      this.state.photoBase64 !== undefined &&
      this.state.photoBase64 !== null
    ) {
      this.setState(
        {
          submitPhoto: true,
          ownbase64: this.state.photoBase64,
          photoBase64: null,
        },
        () => {
          this.resetPhoto();
          this.modalHideHandler();
        }
      );
    } else {
      this.setState({ submitPhoto: true }, () => {
        camera.stopCamera();
        this.modalHideHandler();
      });
    }
  };
  captureSignatureb64 = (data) => {
    this.setState({ capturedSignature: data.substring(22) });
  };

  resetPhoto = () => {
    this.setState({
      photoFile: null,
      photoToShow: undefined,
      photoBase64: null,
    });
  };

  _handleImageChange = (type) => async (e) => {
    e.preventDefault();
    switch (type) {
      case "photo":
        document.getElementById("ownPhotoCross").style.display = "block";
        this._handlePhoto(e);
        break;
      default:
        break;
    }
  };
  _handlePhoto = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      let result = reader.result;
      if (result.substring(0, 22).includes("jpeg"))
        result = result.substring(23);
      else result = result.substring(22);

      this.setState(
        {
          photoFile: file,
          photoToShow: file.name,
          photoBase64: result,
        },
        () => {
          if (
            this.state.photoFile !== undefined &&
            this.state.photoFile !== null
          ) {
            console.log("front");
            // this.upPictureToServer("lock")(e);
          }
        }
      );
    };
    reader.readAsDataURL(file);
  };

  render() {
    let { photoBase64 = userImg1 } =
      this.state.photoBase64 !== null &&
      this.state.photoBase64 !== undefined &&
      this.state.photoBase64;
    let $ownPhotoView = null;
    // $imagePreview = (imagePreviewUrl)
    $ownPhotoView = (
      <img
        src={
          this.state.photoBase64 !== undefined &&
          this.state.photoBase64 !== userImg1 &&
          this.state.photoBase64 !== null
            ? `data:image/jpeg;base64,${this.state.photoBase64}`
            : process.env.PUBLIC_URL + "/dummy-img.jpg"
        }
        className="mx-auto d-block"
        alt="Own Photo"
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
          name="Upload Photo"
          id="ownPhoto"
          cross="ownPhotoCross"
          handleLock={() => this._handleImageChange("photo")}
          //handleLock={(e) => this._handlePhoto(e)}
          brandfileNameToShow={this.state.photoToShow}
          parentCall={() => {
            this.resetPhoto();
          }}
        />
        {$ownPhotoView}
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
    const variants = [
      {
        nomineeName: "Moin Mostakin",
        dateBirth: "1988-10-12",
        relationHolder: "Brother",
        sharePercentage: "100%",
        identificationNumber: "1988123456",
        action: <i className="mdi mdi-close-box" style={{ color: "red" }}></i>,
      },
    ];
    return (
      <div className="row proBanner">
        <div className="col-12">
          <div className="card">
            {this.props.titleToShow !== undefined &&
            this.props.titleToShow === false ? (
              ""
            ) : (
              <h4 className="card-title">Nominee Information</h4>
            )}

            <div className="card-body">
              {/* <form> */}
              <div className="col-md-12">
                <div className="row justify-content-md-center mb-2">
                  <div className="col-md-12 mb-4">
                    <h5>Selected Nominee's</h5>
                    <CustomTable variants={variants} />
                  </div>
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
                      Upload Nominee Photo
                    </button>
                  </div>
                  <div className="col-md-8">
                    {nomineeInfo.map((v, k) => {
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
                            val={this.state[v.id]}
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
                  </div>
                  <div className="col-md-12 text-center mt-4">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        let dataToSend = { ...this.state };
                        console.log(dataToSend);
                      }}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                </div>
              </div>
              {this.props.fromaccordian !== undefined &&
              this.props.fromaccordian === false ? (
                <div
                  className="col-md-12 mt-5 pb-3"
                  style={{ textAlign: "center" }}
                >
                  {/* <Link to="/nominee-information"> */}
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      let dataToSend = { ...this.state };
                      console.log(dataToSend);
                      // instance
                      //   .post(baseURL + "/captureProfileData", dataToSend)
                      //   .then((res) => {
                      //     console.log(res);
                      //   });
                    }}
                  >
                    {" "}
                    Save And Continue
                  </button>
                  {/* </Link> */}
                </div>
              ) : (
                ""
              )}
              {/* </form> */}
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

export default NomineeInformation;
