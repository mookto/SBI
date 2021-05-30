import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { instance, baseURL } from "../service/ApiUrls";

let xx = [];
export class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  componentDidMount() {
    instance.post(baseURL + "/getAllAccounts").then((res) => {
      if (res.data.result.error === false) {
        this.setState({ content: res.data.data }, () => {
          xx = [];
          this.state.content.map((v) => {
            xx.push(this.flattenObject(v));
          });
          this.setState({ converted: xx });
        });
      }
    });
  }

  render() {
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
        name: "account.accountType",
        label: "Account Type",
        options: {
          filter: true,
          sort: true,
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
    ];

    const options = {
      filterType: "checkbox",
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
