import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducer";
import "./index.css";
import App from "./App";

const rssFeedStorage = JSON.parse(
  window.localStorage.getItem("rssFeedStorage")
);
const store = createStore(rootReducer, rssFeedStorage);

store.subscribe(() => {
  window.localStorage.setItem(
    "rssFeedStorage",
    JSON.stringify(store.getState())
  );
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
