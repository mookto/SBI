import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { ProgressBar, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class ApplicantList extends Component {
  render() {
    const data = [
      {
        id: 1,
        applicant: <Link>Mohammad Abu Taleb</Link>,
        mobile: "01923765432",
        status: "Pending",
      },
      {
        id: 1,
        applicant: <Link>Moin Mostakin</Link>,
        mobile: "01967884442",
        status: "Pending",
      },
      {
        id: 1,
        applicant: <Link>Tarik Mahamud</Link>,
        mobile: "01923346432",
        status: "Active",
      },
      {
        id: 1,
        applicant: <Link>Asraful Jubair</Link>,
        mobile: "05643765432",
        status: "Pending",
      },
    ];
    const columns = [
      {
        name: "Applicant Name",
        selector: "applicant",
        sortable: true,
      },
      {
        name: "Mobile No",
        selector: "mobile",
        sortable: true,
        right: true,
      },
      {
        name: "Status",
        selector: "status",
        sortable: true,
        right: true,
      },
    ];
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Applicants List</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Dashboard
                </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Applicants List
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <DataTable
              columns={columns}
              data={data}
              striped={true}
              persistTableHead={true}
              selectableRows
              pagination={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicantList;
