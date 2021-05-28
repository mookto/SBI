import React, { Component } from "react";

class CusAccordions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="question">
        <header>
          <h4 onClick={() => setExpanded(!expanded)} className="question-title">
            {title}
          </h4>
          <button className="cusbtn" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <i className="mdi mdi-minus" />
            ) : (
              <i className="mdi mdi-plus"></i>
            )}
          </button>
        </header>
        {expanded && <p>{info}</p>}
      </article>
    );
  }
}

export default CusAccordions;
