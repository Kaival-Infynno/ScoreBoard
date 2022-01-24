import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Routedemo from "./Routedemo";
import "./input.css";
import { Provider } from "react-redux";
import store from "./services/store";
ReactDOM.render(
  <Provider store={store}>
    <Routedemo />
  </Provider>,

  document.getElementById("root")
);
reportWebVitals();
