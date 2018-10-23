import React, { Component } from "react";

class Feed extends Component {
  render() {
    debugger;
    let feed;
    let obj =
      this.props.feedObj &&
      this.props.feedObj.filter(el => {
        return el.feed.url === this.props.tempURL;
      });

    if (obj.length) {
      let feedObj = obj[0].items;

      feed =
        feedObj &&
        feedObj.map(el => {
          return (
            <div className="feed-content__text">
              <h3>{el.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: el.description }} />
            </div>
          );
        });
    }

    return <div className="feed-content">{feed}</div>;
  }
}

export default Feed;
