import * as React from "react";
import * as ReactDOM from "react-dom";
import CreateEventPage from "./components/CreateEventPage";
import { Account } from "./components/types";
import Register from "./components/Register";
import App from "./components/App";
import "./index.css";
import Navbar from "./components/Navbar";
import DiscoverPage from "./components/DiscoverPage";
import PersonalCreatedEventsPage from "./components/PersonalCreatedEventsPage";
import LandingPage from "./components/LandingPage";
/*
<div id="app-container">
      <Navbar account={undefined}/>
      <DiscoverPage events={[]} account={undefined}/>
    </div>,
*/
ReactDOM.render(
  <App />,
  document.getElementById("app")
);

//ReactDOM.render(<MyFancyComponent />, document.getElementById("ïd"));

//ReactDOM.render(<Register />, document.getElementById("app"));
//ReactDOM.render(<Login onClick={() => {}} />, document.getElementById("app"));
ReactDOM.render(<Register />, document.getElementById("app"));
