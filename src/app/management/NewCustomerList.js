import React, { Component } from "react";
import api from "../service/ApiService";
import { baseURL, instance } from "../service/ApiUrls";
import { confirmAlert } from "react-confirm-alert";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Loader from "../components/Loader";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
let xx = [];

class NewCustomerList extends Component {
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
  callCustomerProfileCount = ({
    datediff = 30,
    branchId = 3,
    first = 0,
    limit = 10,
    filter = null,
  } = {}) => {
    this.setState({ loaderShow: true }, () => {
      instance
        .post(
          baseURL + "/customercountsbybranch",

          { datediff: datediff, branchId: branchId },
          {
            params: {
              first,
              limit,
              filter,
            },
          }
        )
        .then((res) => {
          if (res.data.result.error === false) {
            this.setState(
              { ...res.data.data, loaderShow: false, rowsPerPage: limit },
              () => {
                xx = [];
                this.state.content.map((v) => {
                  xx.push(this.flattenObject(v));
                });
                this.setState({ converted: xx });
              }
            );
          }
        });
    });
  };

  componentDidMount() {
    instance
      .get(baseURL + "/getloggedinuser")
      .then((res) => {
        if (res.data.result.error === false) {
          //   localStorage.setItem("loggedIn", true);
          //   localStorage.setItem("username", res.data.data.username);
          //this.setState({ getlogged: { ...res.data.data } });
          this.callCustomerProfileCount();
        } else {
          localStorage.setItem("loggedIn", false);
          this.props.history.push("/banklogin");
        }
      })
      .catch((err) => {
        localStorage.setItem("loggedIn", false);
        window.location.href = "/banklogin";
      });
  }
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyRow: {
          root: {
            "&:nth-child(odd)": {
              backgroundColor: "#FFFCBC",
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
          },
        },
      },
    });
  changePage = (page) => {
    this.setState({ page: page }, () => {
      this.callCustomerProfileCount({ first: page, limit: this.state.perPage });
    });
  };
  render() {
    const { page } = this.state;
    const columns = [
      {
        name: "cp.name",
        label: "Customer Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "cp.customerT24Id",
        label: "Custmer Id",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "cp.mobile",
        label: "Mobile Number",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "cp.profession",
        label: "Profession",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "cp.profession",
        label: "Profession",
        options: {
          display: this.props.showConditionalColumn ? "true" : "excluded",
        },
      },
      //   {
      //     label: "NID Number",
      //     options: {
      //       filter: true,
      //       sort: true,
      //       customBodyRenderLite: (dataIndex) => {
      //         console.log(xx[dataIndex]);
      //         return (
      //           <>
      //             {xx[dataIndex] !== undefined &&
      //             xx[dataIndex] !== null &&
      //             xx[dataIndex]["nidDetail.nationalId10"] === null
      //               ? xx[dataIndex]["nidDetail.nationalId17"]
      //               : xx[dataIndex]["nidDetail.nationalId10"]}
      //           </>
      //         );
      //       },
      //     },
      //   },
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
        this.callCustomerProfileCount({ filter: searchText });
      },
      onTableChange: (action, tableState) => {
        console.log(action, tableState);

        switch (action) {
          case "changeRowsPerPage":
            this.setState({ perPage: tableState.rowsPerPage }, () => {
              this.callCustomerProfileCount({
                first: 0,
                limit: this.state.perPage,
              });
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
            New Customer List{" "}
          </h3>
        </div>
        <div className="row proBanner mt-3">
          <div className="col-12">
            <MuiThemeProvider theme={this.getMuiTheme()}>
              <MUIDataTable
                title={"New Customer List"}
                data={this.state.converted}
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

export default NewCustomerList;
