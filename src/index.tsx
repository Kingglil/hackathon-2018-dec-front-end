import * as React from "react";
import * as ReactDOM from "react-dom";
import CreateEventPage from "./components/CreateEventPage";
import { Account } from "./components/types";
import Register from "./components/Register";
import App from "./components/App";
import "./index.css";

/*ReactDOM.render(
  <CreateEventPage account={{ name: "Creator Test" }} />,
  document.getElementById("app")
);*/

ReactDOM.render(<Register />, document.getElementById("app"));
