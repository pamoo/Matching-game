import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {createStore} from "redux"


import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
