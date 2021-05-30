import React, { Component } from "react";

export default class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.location.state };
  }

  render() {
    return <div></div>;
  }
}
