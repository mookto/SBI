import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { instance, baseURL } from "../service/ApiUrls";

import Loader from "../components/Loader";

const FileDownload = require("js-file-download");

let xx = [];
export class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderShow: false,
      loaderText: "loading....",
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

  apiTocallAccounts = ({ first = 0, limit = this.state.rowsPerPage } = {}) => {
    instance
      .post(baseURL + "/getAllAccounts", null, {
        params: {
          first: first,
          limit: limit,
        },
      })
      .then((res) => {
        if (res.data.result.error === false) {
          this.setState({ ...res.data.data, loaderShow: false }, () => {
            xx = [];
            this.state.content.map((v) => {
              xx.push(this.flattenObject(v));
            });
            this.setState({ converted: xx });
          });
        }
      })
      .catch((err) => {
        this.setState({ loaderShow: false });
      });
  };

  apiforReport = () => {
    instance
      .post(baseURL + "/post-report", this.state.content, {
        responseType: "blob",
      })
      .then((res) => {
        FileDownload(res.data, "report.pdf");
      });
  };

  apiforReportExcel = () => {
    instance
      .post(baseURL + "/post-report-excel", this.state.content, {
        responseType: "blob",
      })
      .then((res) => {
        FileDownload(res.data, "report.xlsx");
      });
  };

  componentDidMount() {
    this.setState({ loaderShow: true }, () => {
      this.apiTocallAccounts();
    });
  }

  changePage = (page) => {
    this.setState({
      // isLoading: true
    });
    console.log(page);
    this.apiTocallAccounts({ first: page, limit: page === 0 ? 1 : page });
  };

  render() {
    const { page } = this.state;
    const columns = [
      {
        name: "product.name",
        label: "Product",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "branch.name",
        label: "Branch",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "account.accountNumber",
        label: "Account Number",
        options: {
          filter: true,
          sort: true,
          // customBodyRenderLite: (dataIndex) => {
          //   console.log(xx[dataIndex]);
          //   return (
          //     <>
          //       {xx[dataIndex]["account.accountType"] === false
          //         ? "Single"
          //         : "Joint"}
          //     </>
          //   );
          // },
        },
      },
      {
        name: "account.accountType",
        label: "Account Type",
        options: {
          filter: true,
          sort: true,
          customBodyRenderLite: (dataIndex) => {
            console.log(xx[dataIndex]);
            return (
              <>
                {xx[dataIndex]["account.accountType"] === false
                  ? "Single"
                  : "Joint"}
              </>
            );
          },
        },
      },
      {
        name: "listCustomers.0.cp.name",
        label: "Account Owner",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Action",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex) => {
            console.log(xx[dataIndex]);
            // let dataToPass = this.state.content.find((obj) => {
            //   return xx[dataIndex].cp !== undefined && obj.cp !== undefined
            //     ? obj.cp.id === xx[dataIndex].cp.id
            //     : "";
            // });
            // console.log(dataToPass);
            let dataToPass = null;
            this.state.content.map((v) => {
              if (v.account.id === xx[dataIndex]["account.id"]) {
                dataToPass = v;
              }
            });
            return (
              <Link
                to={{
                  pathname: "/account-view",
                  state: {
                    fromCustomerList: true,
                    datToload: dataToPass,
                  },
                }}
              >
                View
              </Link>
            );
          },
        },
      },
      {
        name: "Report PDF",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex) => {
            console.log(xx[dataIndex]);
            // let dataToPass = this.state.content.find((obj) => {
            //   return xx[dataIndex].cp !== undefined && obj.cp !== undefined
            //     ? obj.cp.id === xx[dataIndex].cp.id
            //     : "";
            // });
            // console.log(dataToPass);
            let dataToPass = null;
            this.state.content.map((v) => {
              if (v.account.id === xx[dataIndex]["account.id"]) {
                dataToPass = v;
              }
            });
            return (
              <Link
                to={{
                  pathname: "/account-form",
                  state: {
                    fromCustomerList: true,
                    datToload: dataToPass,
                  },
                }}
              >
                Report
              </Link>
            );
          },
        },
      },
    ];

    const options = {
      filterType: "checkbox",

      filterType: "checkbox",

      // filters: false,
      rowsPerPage: this.state.rowsPerPage,
      rowsPerPageOptions: [1, 5, 10],

      // pagination: {
      //   next: "Next Page",
      //   previous: "Previous Page",
      //   rowsPerPage: "Rows per page:",
      //   displayRows: "of",
      // },

      serverSide: true,
      //count, // Use total number of items
      count: this.state.total, // Unknown number of items
      page,
      onTableChange: (action, tableState) => {
        console.log(action, tableState);

        switch (action) {
          case "changeRowsPerPage":
            this.apiTocallAccounts({ limit: tableState.rowsPerPage });
            break;
        }

        if (action === "changePage") {
          console.log("Go to page", tableState.page);
          this.changePage(tableState.page);
        }
      },
      // downloadOptions: {
      //   filename: "excel-format.csv",
      //   separator: ";",
      //   filterOptions: {
      //     useDisplayedColumnsOnly: true,
      //     useDisplayedRowsOnly: true,
      //   },
      // },
      onDownload: (buildHead, buildBody, columns, data) => {
        console.log("download", columns, data, this.state.content);
        this.apiforReportExcel();
        this.apiforReport();
        // this makes a REST call to the server and downloads the data
        //return "\uFEFF" + buildHead(columns) + buildBody(data);
        return false;
      },
    };
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              <h4 className="card-title">Account List</h4>

              <div className="card-body">
                <div className="row justify-content-md-center">
                  <div className="col-md-12">
                    <MUIDataTable
                      title={"Account List"}
                      data={this.state.converted}
                      columns={columns}
                      options={options}
                    />
                    <Loader
                      loaderShow={this.state.loaderShow}
                      onHide={() => {}}
                      loaderText={this.state.loaderText}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AccountList;
