import React, { Component } from "react";

class CusAccordions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  setExpanded = () => {
    this.setState({ expanded: true });
  };
  render() {
    return (
      <article className="question">
        <header>
          <h4 onClick={() => this.setExpanded} className="question-title">
            {title}
          </h4>
          <button className="cusbtn" onClick={() => this.setExpanded}>
            {this.props.expanded ? (
              <i className="mdi mdi-minus" />
            ) : (
              <i className="mdi mdi-plus"></i>
            )}
          </button>
        </header>
        {this.props.expanded && <p>{info}</p>}
      </article>
    );
  }
}

export default CusAccordions;
