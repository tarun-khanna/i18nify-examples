// src/client/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../containers/App";

const clientData = window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <App data={clientData} />
);
