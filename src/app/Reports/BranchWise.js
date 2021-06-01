import React, { Component } from "react";
import DataTable from "react-data-table-component";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import CusFileUpload from "../components/CusFileUpload";

class BranchWise extends Component {
  constructor() {
    super();
    this.state = {
      formDate: new Date(),
      toDate: new Date(),
    };
    this._handleFile = this._handleFile.bind(this);
  }
  _handleFileChange = (type) => async (e) => {
    e.preventDefault();
    switch (type) {
      case "uploadFile":
        document.getElementById("fileCross").style.display = "block";
        this._handleFile(e);
        break;
      default:
        break;
    }
  };

  _handleFile = (e) => {
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
          uploadFile: file,
          fileToShow: file.name,
          filebase64: result,
        },
        () => {
          if (
            this.state.uploadFile !== undefined &&
            this.state.uploadFile !== null
          ) {
            console.log("uploadFile");
            // this.upPictureToServer("lock")(e);
          }
        }
      );
    };
    reader.readAsDataURL(file);
  };
  resetFile = () => {
    this.setState({
      uploadFile: null,
      fileToShow: undefined,
      filebase64: null,
    });
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Branch Wise Report</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Reports
                </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Branch Wise
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <CusFileUpload
              name="File Upload"
              id="passport"
              cross="fileCross"
              handleFile={() => this._handleFileChange("uploadFile")}
              //handleLock={(e) => this._handlePhoto(e)}
              fileNameToShow={this.state.fileToShow}
              parentCall={() => {
                this.resetFile();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BranchWise;
