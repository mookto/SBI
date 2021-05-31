import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { instance, baseURL } from "../service/ApiUrls";
import { IDENTITYTYPE, IDENTITYLIST } from "../Enum";

let xx = [];
export class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, count: 1, value: IDENTITYLIST[0] };
  }

  onChangeHandler = (e) => {
    this.setState(
      { value: e.target.value, documentType: e.target.value },
      () => {
        //console.log(this.state.value.value);
        this.callApiToShowList({ documentType: this.state.value });
      }
    );
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

  callApiToShowList = ({ documentType = 3, first = 0, limit = 100 } = {}) => {
    let dataToSend = {
      documentType: documentType,
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
              xx = [];
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
      {
        name: "passportDetail.passportNumber",
        label: "Passport Number",
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
              if (
                v.cp !== undefined &&
                v.cp !== null &&
                xx[dataIndex] !== undefined &&
                xx[dataIndex] !== null &&
                v.cp.id === xx[dataIndex]["cp.id"]
              ) {
                dataToPass = v;
              }
            });
            return (
              <Link
                to={{
                  pathname: "/customer-view",
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
                    <div className="form-group">
                      <label for="documnet_type">Select Document Type</label>
                      <select
                        className="form-control"
                        id="documnet_type"
                        onChange={this.onChangeHandler}
                      >
                        {IDENTITYLIST.map((v, k) => {
                          return (
                            <option
                              key={v.name + "_" + k}
                              name={v.name}
                              value={v.value}
                            >
                              {v.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
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
