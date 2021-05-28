import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

export class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [
      {
        name: "customerId",
        label: "Customer ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "customerName",
        label: "Customer Name",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "accountType",
        label: "Account Type",
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
            return <Link to="">View</Link>;
          },
        },
      },
    ];

    const data = [
      {
        customerId: "12012340",
        customerName: "Moin Mostakin",
        accountType: "Single",
      },
      {
        customerId: "12012456",
        customerName: "Tarik Mahamud",
        accountType: "Single",
      },
      {
        customerId: "12355146",
        customerName: "Mohammad Abu Taleb",
        accountType: "Joint",
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
              <h4 className="card-title">Customer List</h4>

              <div className="card-body">
                <div className="row justify-content-md-center">
                  <div className="col-md-12">
                    <MUIDataTable
                      title={"Customer List"}
                      data={data}
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
export default CustomerList;
