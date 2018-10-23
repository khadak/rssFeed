import React, {Component} from 'react';

class Url extends Component {
    render() {
        return (
            <div className="side-bar__url">
                <ul>{
                    this.props.feed.map((elObj) => {
                        let url = elObj.feed.url.toLowerCase().trim();

                        return <li
                            onClick={()=> this.props.feedClick(url)}
                            id={url}>{elObj.feed.url}
                            <span onClick={()=> this.props.feedCloseHandler(url)}>X</span>
                        </li>
                    })
                }</ul>
            </div>
        )
    }
}

export default Url;