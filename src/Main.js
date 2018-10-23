import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar
          feedSubmitHandler={this.props.feedSubmitHandler}
          feedCloseHandler={this.props.feedCloseHandler}
          feedClick={this.props.feedClickHandler}
          feed={this.props.feed}
        />
        <Feed feedObj={this.props.feed} tempURL={this.props.tempURL} />
      </div>
    );
  }
}

const InitialStore = {
  feedObj: [],
  tempURL: {}
};
const mapStateToProps = state => {
  if (!state) {
    state = InitialStore;
  }
  return {
    feed: state.feedObj,
    tempURL: state.tempURL
  };
};

const mapDispatchToProps = dispatch => {
  return {
    feedSubmitHandler: (input, feedobj) =>
      dispatch({
        type: "FEEDSUBMIT",
        payload: { input: input, feedobj: feedobj }
      }),
    feedCloseHandler: url => dispatch({ type: "FEEDCLOSE", payload: url }),
    feedClickHandler: url => dispatch({ type: "FEEDCLICK", payload: url })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
