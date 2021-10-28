import React, { Component } from "react";
import api from "../service/ApiService";
import { baseURL } from "../service/ApiUrls";
import { confirmAlert } from "react-confirm-alert";
import TextBox from "../components/TextBox";
import DateBox from "../components/DateBox";
import DropBox from "../components/DropBox";
import { userProfile, userOrg } from "../data/userData";
import Loader from "../components/Loader";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ...props.location.state.datToload
    };
  }

  handleChange = (e) => {
    console.log(e.dataId, e.data);
    this.setState({ [e.dataId]: e.data });
  };

  updateUser = () => {
    let dataTosend = {
      id: this.state.id,
      email: this.state.email,
      nid: this.state.nid,
      fullName: this.state.fullName,
      phoneNo: this.state.phoneNo,
      accessType: Number(this.state.accessType),
    };
    this.setState({ loaderShow: true }, () => {
      api
        .put(baseURL + "/user-list/" + this.state.id, dataTosend)
        .then((res) => {
          if (res.data.result.isError === false) {
            this.setState({ loaderShow: false }, () => {
              confirmAlert({
                title: "Success Message",
                message: <p className="mod-sp">Updated Successfully</p>,
                buttons: [
                  {
                    label: "Ok",
                    onClick: () => {
                      this.props.history.push("/user-management");
                    },
                  },
                ],
                closeOnClickOutside: false,
              });
            });
          } else if (res.data.result.isError === true) {
            this.setState({ loaderShow: false }, () => {
              confirmAlert({
                title: "Error Message",
                message: <p className="mod-p">{res.data.result.errorMsg}</p>,
                buttons: [
                  {
                    label: "Ok",
                    onClick: () => {},
                  },
                ],
                closeOnClickOutside: false,
              });
            });
          }
        })
        .catch((err) => {
          this.setState({ loaderShow: false });
        });
    });
  };
  render() {
    return (
      <div>
        <div className="page-header mt-2">
          <h3 className="page-title" style={{ width: "100%" }}>
            Users Information{" "}
            <button
              className="btn btn-secondary"
              style={{ float: "right" }}
              onClick={() => {
                this.props.history.push({
                  pathname: "/user-management",
                });
              }}
            >
              <i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back
              to User List
            </button>
          </h3>
        </div>
        <div className="row proBanner mt-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-md-center">
                  {userProfile.map((v, k) => {
                    //console.log(v, k);
                    {
                      return v.options === null || v.options === undefined ? (
                        v.dateFormat === null || v.dateFormat === undefined ? (
                          <TextBox
                            key={"org_text" + k}
                            dim={v.dim}
                            id={v.id}
                            name={v.id}
                            title={v.title}
                            isMandatory={v.isMandatory}
                            placeholder={v.placeholder}
                            disable={this.state.isView === true ? true : false}
                            val={
                              this.state[v.id] !== undefined &&
                              this.state[v.id] !== null
                                ? this.state[v.id]
                                : ""
                            }
                            ChangeHandler={(e) => this.handleChange(e)}
                          />
                        ) : (
                          <DateBox
                            key={"nominee_date" + k}
                            dim={v.dim}
                            id={v.id}
                            title={v.title}
                            isMandatory={v.isMandatory}
                            placeholder={v.placeholder}
                            disable={v.disable}
                            callparent={this.callNomineeDob}
                            //val={this.state[v.id]}
                          />
                        )
                      ) : (
                        <DropBox
                          key={"nominee_drop" + k}
                          dim={v.dim}
                          id={v.id}
                          title={v.title}
                          isMandatory={v.isMandatory}
                          placeholder={v.placeholder}
                          disable={v.disable}
                          options={v.options}
                          // val={}
                          ChangeHandler={(e) => this.handleChange(e)}
                        />
                      );
                    }
                  })}
                  <div className="col-md-12 mb-2 m-t2">
                    <p style={{fontSize:"16px"}}>Organization Information</p>
                  </div>
                  {userOrg.map((v, k) => {
                    //console.log(v, k);
                    return (
                      <TextBox
                        key={"tp_text" + k}
                        dim={v.dim}
                        id={v.id}
                        name={v.id}
                        title={v.title}
                        isMandatory={v.isMandatory}
                        placeholder={v.placeholder}
                        disable={this.state.isView === true ? true : false}
                        val={
                          this.state[v.id] !== undefined &&
                          this.state[v.id] !== null
                            ? this.state[v.id]
                            : ""
                        }
                        ChangeHandler={(e) => this.handleChange(e)}
                      />
                    );
                  })}
                </div>
                <div
                  className={
                    this.state.isView === true ? "d-none" : "col-md-12 mt-3"
                  }
                  style={{ textAlign: "center" }}
                >
                  <button
                    className="btn btn-success mt-2"
                    style={{ padding: "12px 20px" }}
                    onClick={() => {
                      this.updateUser();
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
            <Loader
              loaderShow={this.state.loaderShow}
              onHide={() => {}}
              loaderText={this.state.loaderText}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser;
