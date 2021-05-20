import React, { Component } from "react";

export class Signature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <div
              style={{
                width: "233px",
                height: "130px",
                border: "1px solid gray",
                borderRadius: "5px",
              }}
            ></div>
            <div className="mt-3 mb-5" style={{ textAlign: "center" }}>
              <button className="btn btn-dark mr-2">Signature</button>
              <button className="btn btn-danger">Clear</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signature;
