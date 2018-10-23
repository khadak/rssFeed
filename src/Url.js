import React, { Component } from "react";

class Url extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  urlRowClickHandler = url => {
    this.setState = {
      active: true
    };
    this.props.feedClick(url);
  };
  render() {
    let feed = this.props.feed.slice(0).reverse();

    let feedDOM = feed.map((elObj, index) => {
      let url = elObj.feed.url.toLowerCase().trim();
      let classes = this.state.active ? "active" : "";
      return (
        <li
          className={classes}
          onClick={e => this.urlRowClickHandler(url)}
          id={url}
        >
          URL {parseInt(index + 1)}
          <span onClick={() => this.props.feedCloseHandler(url)}>X</span>
        </li>
      );
    });

    return (
      <div className="side-bar__url">
        <ul>{feedDOM}</ul>
      </div>
    );
  }
}

export default Url;
