import * as React from "react";

export interface MyMapWithMarkerProps {
  lat: number;
  lon: number;
}

export interface MyMapWithMarkerState {}

class MyMapWithMarker extends React.Component<
  MyMapWithMarkerProps,
  MyMapWithMarkerState
> {
  map = undefined;
  marker = undefined;
  counter = 0;
  initMap = () => {
    var myLatLng = { lat: 42.510578, lng: 27.461014 };

    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13.25,
      center: myLatLng
    });
    this.placeMarker({ lat: this.props.lat, lng: this.props.lon });
  };
  placeMarker = location => {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      draggable: true
    });
    console.log((google.maps as any).MarkerOptions);
  };

  componentDidMount() {
    console.log(this.initMap);
    if (this.initMap === undefined) {
      console.log("didn't pass");
      this.map = undefined;
      this.marker = undefined;
      this.counter = 0;
      this.placeMarker = location => {
        this.marker = new google.maps.Marker({
          position: location,
          map: this.map
        });
      };
      this.initMap = () => {
        var myLatLng = { lat: 42.510578, lng: 27.461014 };

        this.map = new google.maps.Map(document.getElementById("map"), {
          zoom: 2,
          center: myLatLng
        });
        google.maps.event.addListener(this.map, "click", event => {
          if (this.counter === 0) {
            this.placeMarker(event.latLng);
            this.counter++;
          } else {
            this.marker.setPosition(event.latLng);
          }
          console.log({ props: this.props });
          //this.props.onMarkerPlaced(event.latLng);
        });
      };
    }
    if ((window as any).isReadyFunc() && this.initMap !== undefined) {
      console.log("passed");
      this.initMap();
    } else {
      setTimeout(this.componentDidMount, 100);
    }
  }

  render() {
    return <div id="map" style={{ height: "100%", width: "100%" }} />;
  }
}

export default MyMapWithMarker;
