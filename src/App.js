import React, { Component } from "react";
import "./App.css";
import mainLogo from "./logo.png";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="app__logo">
            <img src={mainLogo} alt={"ADCAT"}/>
          </div>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
