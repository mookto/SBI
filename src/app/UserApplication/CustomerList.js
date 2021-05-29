import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { instance, baseURL } from "../service/ApiUrls";

export class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, count: 1 };
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

  callApiToShowList = ({ first = 0, limit = 100 } = {}) => {
    let dataToSend = {
      documentType: 3,
    };
    instance
      .post(baseURL + "/getcustomerlist", dataToSend, {
        params: {
          first: first,
          limit: limit,
        },
      })
      .then((res) => {
        if (res.data.result.error === false) {
          this.setState(
            {
              content: res.data.data,
            },
            () => {
              let xx = [];
              this.state.content.map((v) => {
                xx.push(this.flattenObject(v));
              });
              this.setState({ converted: xx });
            }
          );
        }
      });
  };

  componentDidMount() {
    this.callApiToShowList();
  }

  changePage = (page) => {
    this.setState({
      // isLoading: true
    });
    console.log(page);
    this.callApiToShowList({ first: page, limit: page + 1 });
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
        name: "cp.nameBn",
        label: "Customer Name(Bangla)",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "nidDetail.nationalId10",
        label: "Nid 10 digit",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "nidDetail.nationalId17",
        label: "Nid 17 digit",
        options: {
          filter: true,
          sort: true,
        },
      },
      // {
      //   name: "customerName",
      //   label: "Customer Name",
      //   options: {
      //     filter: true,
      //     sort: false,
      //   },
      // },
      // {
      //   name: "accountType",
      //   label: "Account Type",
      //   options: {
      //     filter: true,
      //     sort: false,
      //   },
      // },
      // {
      //   name: "Action",
      //   options: {
      //     filter: false,
      //     sort: false,
      //     empty: true,
      //     customBodyRenderLite: (dataIndex) => {
      //       return <Link to="">View</Link>;
      //     },
      //   },
      // },
    ];

    const options = {
      filterType: "checkbox",
      // filters: false,
      // rowsPerPage: 1,
      // rowsPerPageOptions: [5, 10],

      // pagination: {
      //   next: "Next Page",
      //   previous: "Previous Page",
      //   rowsPerPage: "Rows per page:",
      //   displayRows: "of",
      // },

      // serverSide: true,
      // //count, // Use total number of items
      // count: -1, // Unknown number of items
      // page,
      // onTableChange: (action, tableState) => {
      //   // console.log(action, tableState);
      //   if (action === "changePage") {
      //     console.log("Go to page", tableState.page);
      //     this.changePage(tableState.page);
      //   }
      // },
    };
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              <h4 className="card-title">Customer List</h4>

              <div className="card-body">
                <div className="row justify-content-md-center">
                  <div className="col-md-12">
                    <MUIDataTable
                      title={"Customer List"}
                      data={this.state.converted}
                      columns={columns}
                      options={options}
                      pagination
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
export default CustomerList;
