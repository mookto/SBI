import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { instance, baseURL } from "../service/ApiUrls";
import Loader from "../components/Loader";
import { confirmAlert } from "react-confirm-alert";

let xx = [];
export class AppUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderShow: false,
      loaderText: "Loading....",
    };
  }

  flattenObject = (ob) => {
    const toReturn = {};

    Object.keys(ob).map((i) => {
      if (typeof ob[i] === "object" && ob[i] !== null) {
        const flatObject = this.flattenObject(ob[i]);
        Object.keys(flatObject).map((x) => {
          toReturn[`${i}.${x}`] = flatObject[x];
          return x;
        });
      } else {
        toReturn[i] = ob[i];
      }
      return i;
    });
    return toReturn;
  };

  callgetAppUser = () => {
    instance
      .get(baseURL + "/appuserlist")
      .then((res) => {
        if (res.data.result.error === false) {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("username", res.data.data.username);
          this.setState(
            {
              content: res.data.data.content,
              ...res.data.data,
              loaderShow: false,
            },
            () => {
              xx = [];
              this.state.content.map((v) => {
                xx.push(this.flattenObject(v));
              });
              this.setState({ converted: xx });
            }
            // () => {
            //   // this.apiTocallAccounts();
            // }
          );
          console.log("Data", this.state.converted);
        } else {
          localStorage.setItem("loggedIn", false);
          this.props.history.push("/banklogin");
        }
      })
      .catch((err) => {
        localStorage.setItem("loggedIn", false);
        window.location.href = "/banklogin";
      });
  };

  componentDidMount() {
    this.setState({ loaderShow: true }, () => {
      this.callgetAppUser();
    });
  }

  changePage = (page) => {
    this.setState({
      // isLoading: true
    });
    console.log(page);
    this.callgetAppUser({
      first: page,
      limit: this.state.rowsPerPage,
    });
  };

  render() {
    const { page } = this.state;
    const columns = [
      {
        name: "username",
        label: "Userame",
        searchable: true,
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "email",
        label: "Email Address",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "mobile",
        label: "Mobile Number",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "lockStatus",
        label: "Account Status",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
                {value === true ? (
                  <span className="badge badge-success">Active</span>
                ) : (
                  <span className="badge badge-danger">Inactive</span>
                )}
              </div>
            );
          },
        },
      },
      {
        name: "Action",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex) => {
            let statusCheck = this.state.content.find((obj) => {
              return xx[dataIndex].id !== undefined && obj.id !== undefined
                ? obj.id === xx[dataIndex].id
                : "";
            });
            return (
              <>
                {statusCheck.lockStatus == false ? (
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.setState({ loaderShow: true }, () => {
                        console.log("Data to send", statusCheck.id);
                        instance
                          .put(baseURL + "/updatelockstatus", {
                            userId: statusCheck.id,
                            lockStatus: true,
                          })
                          .then((res) => {
                            console.log(res.data);
                            if (res.data.result.error === false) {
                              this.setState({ loaderShow: false }, () => {
                                confirmAlert({
                                  title: "Success Message",
                                  message: (
                                    <p className="mod-sp">
                                      Active User Successfully
                                    </p>
                                  ),
                                  buttons: [
                                    {
                                      label: "Ok",
                                      onClick: () => {
                                        this.callgetAppUser();
                                      },
                                    },
                                  ],
                                  closeOnClickOutside: false,
                                });
                              });
                            } else if (res.data.result.error === true) {
                              this.setState({ loaderShow: false }, () => {
                                confirmAlert({
                                  title: "Error Message",
                                  message: (
                                    <p className="mod-p">
                                      {res.data.result.errorMsg}
                                    </p>
                                  ),
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
                          });
                      });
                    }}
                  >
                    Active User
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      this.setState({ loaderShow: true }, () => {
                        console.log("Data to send", statusCheck.id);
                        instance
                          .put(baseURL + "/updatelockstatus", {
                            userId: statusCheck.id,
                            lockStatus: false,
                          })
                          .then((res) => {
                            console.log(res.data);
                            if (res.data.result.error === false) {
                              this.setState({ loaderShow: false }, () => {
                                confirmAlert({
                                  title: "Success Message",
                                  message: (
                                    <p className="mod-sp">
                                      Deactive User Successfully
                                    </p>
                                  ),
                                  buttons: [
                                    {
                                      label: "Ok",
                                      onClick: () => {
                                        this.callgetAppUser();
                                      },
                                    },
                                  ],
                                  closeOnClickOutside: false,
                                });
                              });
                            } else if (res.data.result.error === true) {
                              this.setState({ loaderShow: false }, () => {
                                confirmAlert({
                                  title: "Error Message",
                                  message: (
                                    <p className="mod-p">
                                      {res.data.result.errorMsg}
                                    </p>
                                  ),
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
                          });
                      });
                    }}
                  >
                    Deactive User
                  </button>
                )}
              </>
            );
          },
        },
      },
    ];

    const options = {
      filterType: "checkbox",
    };
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              <h4 className="card-title">App User List</h4>

              <div className="card-body">
                <div className="row justify-content-md-center">
                  <div className="col-md-12">
                    <MUIDataTable
                      title={"App User List"}
                      data={this.state.converted}
                      columns={columns}
                      options={options}
                    />
                  </div>
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
export default AppUserList;
