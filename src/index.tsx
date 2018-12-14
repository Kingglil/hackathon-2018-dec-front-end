import * as React from "react";
import * as ReactDOM from "react-dom";
import CreateEventPage from "./components/CreateEventPage";
import { Account } from "./components/types";

import App from "./components/App";

ReactDOM.render(
  <CreateEventPage account={{ name: "Creator Test" }} />,
  document.getElementById("app")
);
