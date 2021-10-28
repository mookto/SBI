import React, { Component } from "react";
import api from "../service/ApiService";
import { baseURL } from "../service/ApiUrls";
import { confirmAlert } from "react-confirm-alert";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Loader from "../components/Loader";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
let xx = [];

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ...props.location.state.datToload
      totalRecords: 0,
      loading: false,
      perPage: 10,
      page: 0,
      count: 1,
      loaderShow: false,
    };
  }

  handleChange = (e) => {
    console.log(e.dataId, e.data);
    this.setState({ [e.dataId]: e.data });
  };

  callListofUsers = ({
    first = 0,
    limit = this.state.perPage,
    filter,
  } = {}) => {
    window.CallApis !== undefined &&
      window.CallApis.getApiData({
        url: baseURL + "/user-list",
        params: { first, limit, filter },
        dataTosend: null,
        method: "GET",
      });
  };

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyRow: {
          root: {
            "&:nth-child(odd)": {
              backgroundColor: "#fafbfc",
            },
          },
        },
        MUIDataTableHeadCell: {
          root: {
            color: "#000 !important",
            fontWeight: "bold !important",
            textAlign: "center",
          },
          data: {
            color: "#000 !important",
            fontWeight: "bold !important",
          },
          contentWrapper: { display: "block !important" },
          sortAction: {
            "& path": {
              color: "teal ",
            },
          },
          sortActive: {
            color: "",
          },
        },
        MuiTableCell: {
          body: { textAlign: "center" },
          root: {
            borderColor: "#d3d3d3",
            border: [[1, "solid", "#c0c0c0"]],
            padding: "14px !important",
          },
        },
      },
    });
  changePage = (page) => {
    this.setState({ page: page }, () => {
      this.callListofUsers({ first: page, limit: this.state.perPage });
    });
  };
  render() {
    const { page } = this.state;
    const columns = [
      {
        name: "fullName",
        label: "Full Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "empId",
        label: "Empolyee Id",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "designation",
        label: "Designation",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "phoneNo",
        label: "Phone",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "nid",
        label: "NID Number",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "Action",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex) => {
            let dataToPass = null;
            this.state.data.map((v) => {
              if (
                v !== undefined &&
                v !== null &&
                xx[dataIndex] !== undefined &&
                xx[dataIndex] !== null &&
                v.id === xx[dataIndex].id
              ) {
                dataToPass = v;
              }
            });
            return (
              <>
                <div style={{ textAlign: "center" }}>
                  <Link
                    to={{
                      pathname: "/user",
                      state: {
                        datToload: dataToPass,
                        isView: true,
                      },
                    }}
                  >
                    <i
                      className="mdi mdi-eye"
                      style={{ fontSize: "18px" }}
                      data-tip
                      data-for="cusView"
                    ></i>
                    <ReactTooltip id="cusView" type="info">
                      <span>View</span>
                    </ReactTooltip>
                  </Link>
                  <Link
                    to={{
                      pathname: "/user",
                      state: {
                        datToload: dataToPass,
                      },
                    }}
                  >
                    <i
                      className="mdi mdi-pencil-box-outline"
                      style={{ fontSize: "18px" }}
                      data-tip
                      data-for="cusEdit"
                    ></i>
                    <ReactTooltip id="cusEdit" type="info">
                      <span>Edit User</span>
                    </ReactTooltip>
                  </Link>
                  <i
                    className="mdi mdi-delete"
                    style={{
                      color: "red",
                      fontSize: "18px",
                      marginLeft: "2px",
                      cursor: "pointer",
                    }}
                    data-tip
                    data-for="cusDelete"
                    onClick={() => {
                      console.log(this.state.data[dataIndex]);
                      this.setState({
                        modalDelete: true,
                        e: this.state.data[dataIndex],
                      });
                    }}
                  ></i>
                  <ReactTooltip id="cusDelete" type="error">
                    <span>Delete</span>
                  </ReactTooltip>
                </div>
              </>
            );
          },
        },
      },
    ];

    const options = {
      filterType: "checkbox",
      filter: false,
      download: false,
      print: false,
      selectableRows: "none",
      rowsPerPage: this.state.perPage,
      rowsPerPageOptions: [5, 10, 15, 20],
      serverSide: true,
      //count, // Use total number of items
      count: this.state.totalRecords, // Unknown number of items
      page,
      onSearchChange: (searchText) => {
        console.log("search: " + searchText);
        this.callListofUsers({ filter: searchText });
      },
      onTableChange: (action, tableState) => {
        console.log(action, tableState);

        switch (action) {
          case "changeRowsPerPage":
            this.setState({ perPage: tableState.rowsPerPage }, () => {
              this.callListofUsers({ first: 0, limit: this.state.perPage });
            });
            break;
          case "changePage":
            this.changePage(tableState.page);
            break;
          case "filterChange":
            console.log("filter change", tableState);
            break;
        }
      },
    };
    return (
      <div>
        <div className="page-header mt-2">
          <h3 className="page-title" style={{ width: "100%" }}>
            Users List{" "}
            <button
              className="btn btn-secondary"
              style={{ float: "right" }}
              onClick={() => {
                this.props.history.push({
                  pathname: "/new-user",
                });
              }}
            >
              <i class="mdi mdi-plus"></i> Add New User
            </button>
          </h3>
        </div>
        <div className="row proBanner mt-3">
          <div className="col-12">
            <MuiThemeProvider theme={this.getMuiTheme()}>
              <MUIDataTable
                title={"User List"}
                data={this.state.data}
                columns={columns}
                options={options}
              />
            </MuiThemeProvider>
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

export default UsersList;
