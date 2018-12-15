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
import FriendList from "./components/FriendList";
import MapContainer from "./components/GoogleMapsTest";
import MyMap from "./components/GoogleMapsTest";
import MyMapDraggable from "./components/GoogleMapsDraggable";
/*
<div id="app-container">
      <Navbar account={undefined}/>
      <DiscoverPage events={[]} account={undefined}/>
    </div>,
*/
ReactDOM.render(<App />, document.getElementById("app"));
/*ReactDOM.render(
  <MyMap
    onMarkerPlaced={coords => {
      console.log(coords.lat());
      console.log(coords.lng());
    }}
  />,
  document.getElementById("app")
);*/
/*ReactDOM.render(
  <FriendList
    account={{
      name: "stoqn kolev",
      friendList: [
        { name: "stoqn kolev1", friendList: undefined },
        { name: "stoqn kolev2", friendList: undefined },
        { name: "stoqn kolev3", friendList: undefined },
        { name: "stoqn kolev4", friendList: undefined }
      ]
    }}
  />,
  document.getElementById("app")
);
*/
//ReactDOM.render(<MyMapDraggable />, document.getElementById("app"));
