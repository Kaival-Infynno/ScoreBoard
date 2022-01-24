import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Routedemo from './Routedemo'
import "./input.css";
import { Provider } from "react-redux";
import store from "./services/store";
ReactDOM.render(
  // <React.StrictMode>
    // <App />,
    <Provider store={store}>
    <Routedemo/>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
