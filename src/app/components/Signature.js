import React, { Component } from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <input
          type="button"
          id={this.props.id}
          value={this.props.value}
          style={btnStyle}
          onClick={this.props.funcName}
        />
      </div>
    );
  }
}

class TextBox extends React.Component {
  render() {
    return (
      <textarea
        cols="125"
        rows="15"
        id={this.props.id}
        style={{
          display: "none",
          marginLeft: "15px",
          padding: "10px 10px",
          textAlign: "left",
        }}
      ></textarea>
    );
  }
}
const textStyle = {
  marginLeft: "15px",
};

const btnStyle = {
  height: "10mm",
  width: "35mm",
};

const boxStyle = {
  height: "35mm",
  width: "60mm",
  border: "1px solid #d3d3d3",
};

export class Signature extends Component {
  constructor(props) {
    super(props);
    window.signature = this;
    this.state = {};
  }

  receiveSignature = (data) => {
    this.setState({ signatureb64: data });
  };

  render() {
    return (
      <div className="App">
        <div style={{ width: "100%" }}>
          <table>
            <tbody>
              <tr>
                <td rowSpan="3">
                  <div
                    id="imageBox"
                    className="boxed"
                    style={boxStyle}
                    //onDoubleClick={window.displaySignatureDetails}
                    title="Double-click a signature to display its details"
                  ></div>
                </td>
                <td>
                  <Button
                    value="Capture"
                    funcName={window.capture}
                    title="Starts signature capture"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    value="Clear"
                    funcName={window.clearSignature}
                    title="Clears the signature"
                  />
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <table style={{ display: "none" }}>
            <tbody>
              <tr>
                <td>
                  <b>Data included in the hash:</b>
                </td>
                <td>
                  First name:{" "}
                  <input
                    type="text"
                    id="fname"
                    defaultValue={this.props.fname}
                  />
                </td>
                <td>
                  Last name:{" "}
                  <input
                    type="text"
                    id="lname"
                    defaultValue={this.props.lname}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table style={{ display: "none" }}>
            <tbody>
              <tr>
                <td>
                  <b>Options:</b>
                </td>
                <td>
                  <input
                    style={{ display: "none" }}
                    type="checkbox"
                    id="chkUseB64Image"
                    checked
                  />
                  Use base-64 signature image
                </td>
                <td>
                  <input
                    style={{ display: "none" }}
                    type="checkbox"
                    id="chkShowSigText"
                    onClick={window.enableRestoreButton}
                  />
                  Output SigText to form
                </td>
              </tr>
            </tbody>
          </table>
          <TextBox id="txtDisplay" />
        </div>
      </div>
    );
  }
}
export default Signature;
