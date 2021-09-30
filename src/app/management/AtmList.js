import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { instance, baseURL } from "../service/ApiUrls";
import Loader from "../components/Loader";

let xx = [];
export class AtmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderShow: false,
      loaderText: "Loading....",
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

  callAtmList = ({
    first = 0,
    limit = this.state.rowsPerPage,
    filter = null,
  } = {}) => {
    instance
      .post(baseURL + "/getatms", null, {
        params: {
          first: first,
          limit: limit,
          filter: filter,
        },
      })
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
          console.log("state", this.state.converted);
        }
      })
      .catch((err) => {
        this.setState({ loaderShow: false });
      });
  };

  componentDidMount() {
    this.setState({ loaderShow: true }, () => {
      this.callAtmList();
    });
  }

  changePage = (page) => {
    this.setState({
      // isLoading: true
    });
    console.log(page);
    this.callAtmList({
      first: page,
      limit: this.state.rowsPerPage,
    });
  };

  render() {
    const { page } = this.state;
    const columns = [
      {
        name: "name",
        label: "Branch Name",
        searchable: true,
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "branchCode",
        label: "Branch Code",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) => {
            return (
              <div>{value !== null && value !== undefined ? value : "N/A"}</div>
            );
          },
        },
      },
      {
        name: "address",
        label: "Address",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value) => {
            return (
              <div style={{ width: "auto" }}>
                {value !== null && value !== undefined ? value : "N/A"}
              </div>
            );
          },
        },
      },
    ];

    const options = {
      filterType: "checkbox",
      serverSide: true,
      rowsPerPage: this.state.rowsPerPage,
      rowsPerPageOptions: [1, 5, 10, 20],
      filter: false,
      //  onSearchChange: (searchText) => {
      //    console.log("search: " + searchText);
      //    this.callAtmList({ filter: searchText });
      //  },
      count: this.state.total,
      page,

      onTableChange: (action, tableState) => {
        console.log(action, tableState);

        switch (action) {
          case "changeRowsPerPage":
            this.callAtmList({ limit: tableState.rowsPerPage });
            break;
          case "changePage":
            this.changePage(tableState.page);
            break;
          case "filterChange":
            console.log("filter change", tableState);
            break;
        }

        if (action === "changePage") {
          console.log("Go to page", tableState.page);
          this.changePage(tableState.page);
        }
      },
    };
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <div className="card">
              <h4 className="card-title">ATM List</h4>

              <div className="card-body">
                <div className="row justify-content-md-center">
                  <div className="col-md-12">
                    <MUIDataTable
                      title={"ATM List"}
                      data={this.state.converted}
                      columns={columns}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>
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
export default AtmList;
