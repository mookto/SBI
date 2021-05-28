import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

export class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      {
        name: "accountName",
        label: "Account Name",
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
        name: "status",
        label: "Status",
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
        accountNo: "12012340",
        accountName: "Moin Mostakin",
        accountType: "Single",
        status: "Active",
      },
      {
        accountNo: "12012456",
        accountName: "Tarik Mahamud",
        accountType: "Single",
        status: "Pending",
      },
      {
        accountNo: "12355146",
        accountName: "Mohammad Abu Taleb",
        accountType: "Joint",
        status: "Active",
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
export default AccountList;
