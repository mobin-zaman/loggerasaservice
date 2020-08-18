import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "react-modal"

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import AppRouter from "./router/router";

const el = document.getElementById("root")
Modal.setAppElement(el);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*<App />*/}
      <AppRouter />
    </Router>
  </React.StrictMode>,
    el
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
