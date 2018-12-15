/*import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import * as React from "react";
import { Component } from "react";
/*
const someLatLng = { lat: 42.510578, lng: 27.461014 };
export const googleMapURL =
  "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCncT6GETBHhHdRZzZzk_GaZPh5FFPYs0I";

if (root) {
  const MyGoogleMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultCenter={someLatLng}
        defaultZoom={13}
        options={{ disableDefaultUI: true }}
      />
    ))
  );
  const loadingElement = <div />;
  const containerElement = <div style={{ height: "100vh" }} />;
  const mapElement = <div style={{ height: "20%", width: "20%" }} />;
  const map = (
    <MyGoogleMap
      loadingElement={loadingElement}
      containerElement={containerElement}
      googleMapURL={googleMapURL}
      mapElement={mapElement}
    />
  );
}

export const googleMapURL =
  "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCncT6GETBHhHdRZzZzk_GaZPh5FFPYs0I";

const loadingElement = <div />;
const containerElement = <div style={{ height: "100vh" }} />;
const mapElement = <div style={{ height: "30%", width: "30%" }} />;
/*const MyGoogleMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultCenter={someLatLng}
      defaultZoom={13}
      options={{ disableDefaultUI: true }}
    />
  ))
);
export default class MyGoogleMaps extends React.Component<
  { lat: number; long: number },
  {}
> {
  someLatLng = { lat: 42.510578, lng: 27.461014 };
  componentDidMount() {
    this.someLatLng = {
      lat: this.props.lat,
      lng: this.props.long
    };
  }
  MyGoogleMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultCenter={this.someLatLng}
        defaultZoom={13}
        options={{ disableDefaultUI: true }}
      />
    ))
  );
  loadingElement = <div />;
  containerElement = <div style={{ height: "100vh" }} />;
  mapElement = <div style={{ height: "20%", width: "20%" }} />;
  render() {
    return (
      <this.MyGoogleMap
        loadingElement={loadingElement}
        containerElement={containerElement}
        googleMapURL={googleMapURL}
        mapElement={mapElement}
      />
    );
  }
}
*/
/*import {
  GoogleMap,
  withGoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";
import * as React from "react";
import { compose, withStateHandlers } from "recompose";

const Map = compose(
  withStateHandlers(
    () => ({
      isMarkerShown: false,
      markerPosition: null
    }),
    {
      onMapClick: ({ isMarkerShown }) => e => ({
        markerPosition: e.latLng,
        isMarkerShown: true
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} />}
  </GoogleMap>
));

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
*/

import * as React from "react";

export interface MyMapProps {}

export interface MyMapState {}

class MyMap extends React.Component<MyMapProps, MyMapState> {
  initMap() {
    var myLatLng = { lat: -25.363, lng: 131.044 };
    let counter = 0;

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng
    });

    var marker;
    google.maps.event.addListener(map, "click", function(event) {
      if (counter === 0) {
        placeMarker(event.latLng);
        counter++;
      } else {
        marker.setPosition(event.latLng);
      }
    });

    function placeMarker(location) {
      marker = new google.maps.Marker({
        position: location
      });
      marker.setMap(map);
    }
  }
  componentDidMount() {
    if ((window as any).isReadyFunc()) {
      this.initMap();
    } else {
      setTimeout(this.componentDidMount, 100);
    }
  }
  render() {
    return <div id="map" style={{ height: "50%", width: "50%" }} />;
  }
}

export default MyMap;
