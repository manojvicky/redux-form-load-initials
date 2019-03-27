import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootreducer from "./combineReducer";
import App from "./App";
import "./styles.css";
const customLogger = function(store) {
  return function(next) {
    return function(action) {
      console.log(
        "%c Previous state:",
        "color:blue; font-weight: bold",
        store.getState()
      );
      console.log("%c Action:", "color:red; font-weight: bold", action);
      next(action);
      console.log(
        "%c Next state:",
        "color:orange; font-weight: bold",
        store.getState()
      );
      console.log("\n");
    };
  };
};

let store = createStore(rootreducer, applyMiddleware(customLogger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
