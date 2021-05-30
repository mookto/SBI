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
        name: "accountNo",
        label: "Account No",
        options: {
          filter: true,
          sort: true,
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
