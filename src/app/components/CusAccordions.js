import React, { Component } from "react";

class CusAccordions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  setExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    return (
      <article className="question">
        <header>
          <h4 onClick={() => this.props.setExpanded} className="question-title">
            {this.props.title}
          </h4>
          <button className="cusbtn" onClick={() => this.setExpanded()}>
            {this.state.expanded ? (
              <i className="mdi mdi-minus" />
            ) : (
              <i className="mdi mdi-plus"></i>
            )}
          </button>
        </header>
        {/* {this.state.expanded && <p>{this.props.info}</p>} */}
        {this.state.expanded ? React.createElement(this.props.component) : ""}
      </article>
    );
  }
}

export default CusAccordions;
