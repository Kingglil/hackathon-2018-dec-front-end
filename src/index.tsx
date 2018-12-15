import * as React from "react";
import * as ReactDOM from "react-dom";
import CreateEventPage from "./components/CreateEventPage";
import { Account } from "./components/types";
import Register from "./components/Register";
import App from "./components/App";
import "./index.css";
import Navbar from "./components/Navbar";
import DiscoverPage from "./components/DiscoverPage";
import MyGoogleMaps from "./components/GoogleMapsTest";

/*ReactDOM.render(
  <div style={{ height: "100%" }}>
    <Navbar account={{ name: "Creator Test" }} />
    <DiscoverPage events={[]} account={undefined} />
  </div>,
  document.getElementById("app")
);*/

//ReactDOM.render(<MyFancyComponent />, document.getElementById("ïd"));

//ReactDOM.render(<Register />, document.getElementById("app"));
ReactDOM.render(
  <div style={{ height: "100vh" }}>
    <MyGoogleMaps />
  </div>,
  document.getElementById("app")
);
