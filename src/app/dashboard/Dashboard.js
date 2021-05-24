import React, { Component } from "react";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Welcome to Dashboard</p>
              <button
                type="button"
                className="btnotp"
                onClick={() => {
                  this.props.history.push("/usermobile");
                }}
              >
                New Customer
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
