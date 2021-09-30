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
      page: 0,
      count: 1,
      total: -1,
      rowsPerPage: 10,
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

  callgetAppUser = ({
    first = 0,
    limit = this.state.rowsPerPage,
    filter = null,
  } = {}) => {
    instance
      .get(baseURL + "/appuserlist", {
        params: {
          first: first,
          limit: limit,
          filter: filter,
        },
      })
      .then((res) => {
        if (res.data.result.error === false) {
          this.setState(
            {
              content: res.data.data.content,
              ...res.data.data,
              rowsPerPage: limit,
              loaderShow: false,
            },
            () => {
              xx = [];
              this.state.content.map((v) => {
                xx.push(this.flattenObject(v));
              });
              this.setState({ converted: xx });
            }
          );
          console.log("Data", this.state.converted);
        }
      })
      .catch((err) => {
        this.setState({ loaderShow: false });
      });
  };
  userStatusUpdate = ({
    userId = this.state.statusCheck.id,
    lockStatus = false,
  } = {}) => {
    this.setState({ loaderShow: true }, () => {
      console.log("Data to send", this.state.statusCheck.id);
      instance
        .put(baseURL + "/updatelockstatus", {
          userId: userId,
          lockStatus: lockStatus,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.result.error === false) {
            this.setState({ loaderShow: false }, () => {
              confirmAlert({
                title: "Success Message",
                message: (
                  <p className="mod-sp">
                    {lockStatus === true ? "Inactive " : "Active "} User
                    Successfully
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
        });
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
        name: "fullName",
        label: "Name",
        searchable: true,
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "cbsCustId",
        label: "CBS ID",
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
          customBodyRender: (value) => {
            return (
              <div>{value !== null && value !== undefined ? value : "N/A"}</div>
            );
          },
        },
      },
      {
        name: "phoneNo",
        label: "Mobile Number",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "locked",
        label: "Account Status",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) => {
            return (
              <div>
                {value === false ? (
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
              return xx[dataIndex] !== undefined &&
                obj !== undefined &&
                xx[dataIndex].id !== undefined &&
                obj.id !== undefined
                ? obj.id === xx[dataIndex].id
                : "";
            });

            // this.setState({ statusCheck: statusCheck });

            return (
              <>
                {this.state.statusCheck !== null &&
                this.state.statusCheck !== undefined &&
                this.state.statusCheck.locked === true ? (
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.setState({ statusCheck: statusCheck }, () => {
                        this.userStatusUpdate({ lockStatus: false });
                      });
                    }}
                  >
                    Active User
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      this.setState({ statusCheck: statusCheck }, () => {
                        this.userStatusUpdate({ lockStatus: true });
                      });
                    }}
                  >
                    Inactive User
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
      serverSide: true,
      rowsPerPage: this.state.rowsPerPage,
      rowsPerPageOptions: [1, 5, 10],
      onSearchChange: (searchText) => {
        console.log("search: " + searchText);
        this.callgetAppUser({ filter: searchText });
      },
      count: this.state.total, // Unknown number of items
      page,
      onTableChange: (action, tableState) => {
        console.log(action, tableState);

        switch (action) {
          case "changeRowsPerPage":
            this.callgetAppUser({ limit: tableState.rowsPerPage });
            break;
          case "changePage":
            this.changePage(tableState.page);
            break;
          case "filterChange":
            console.log("filter change", tableState);
            break;
        }

        if (action === "changePage") {
          console.log("Go to page", tableState.page);
          this.changePage(tableState.page);
        }
      },
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
