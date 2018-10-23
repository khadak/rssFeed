import React, {Component} from 'react';
import Url from './Url';
import jsonp from 'jsonp';

class Sidebar extends Component {
    state = {
        input: '',
        url:  'https://api.rss2json.com/v1/api.json?rss_url=',
        counter: 0
    };

    onInputHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    };


    addingFeedObj = () => {
        let url = this.state.url + this.state.input;
        url = url.toLowerCase().trim();
        jsonp(url , null, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                this.props.feedSubmitHandler(this.state.input.toLowerCase().trim(), data );
                this.setState({
                    input: ''
                })
            }
        });
    };


    render() {
        return (
            <div className="side-bar">
                <h2>Please enter your RSS Feed url here.</h2>
                <div className="side-bar__input">
                    <input className="input__text" type="text" onChange={this.onInputHandler} value={this.state.input}/>
                    <button className="input__btn" onClick={() => {this.addingFeedObj()}}>Submit</button>
                </div>

                <Url feed={this.props.feed} feedClick={this.props.feedClick} feedCloseHandler={this.props.feedCloseHandler} />
            </div>
        )
    }
}

export default Sidebar;