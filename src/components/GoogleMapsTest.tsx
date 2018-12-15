import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
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
*/
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
);*/
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
