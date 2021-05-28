import React, { Component } from "react";

class CusAccordions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.accordianOpen === true,
    };
  }
  setExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  handle = (id, value) => {
    console.log(id, value);
    this.props.setData({ id: id, value: value });
  };
  render() {
    return (
      <article className="question">
        <header>
          <h4 onClick={() => this.setExpanded()} className="question-title">
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
        {this.state.expanded
          ? this.props.component !== undefined
            ? React.createElement(this.props.component, {
                handle: this.handle,
                fromaccordian: true,
                titleToShow: false,
              })
            : "No data Found"
          : ""}
      </article>
    );
  }
}

export default CusAccordions;
