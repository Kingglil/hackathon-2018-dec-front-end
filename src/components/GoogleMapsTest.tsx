/*import * as React from "react";

export interface MyMapProps {
  onMarkerPlaced: string;
  sugudfsghdf: string;
}

export interface MyMapState {}

class MyMap extends React.Component<MyMapProps, MyMapState> {
  componentDidMount() {
    if ((window as any).isReadyFunc()) {
      var myLatLng = { lat: -25.363, lng: 131.044 };
      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng
      });
    } else {
      setTimeout(this.componentDidMount, 100);
    }
  }
  map;
  counter = 0;
  placeMarker(location, map) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
  }
  marker = undefined;
  render() {
    return (
      <div
        id="map"
        style={{ height: "50%", width: "50%" }}
        onClick={event => {
          console.log((event as any).latLng);
          if (this.counter === 0) {
            this.placeMarker(event, event.target);
            this.counter++;
          } else {
            this.marker.setPosition((event as any).latLng);
          }
        }}
      />
    );
  }
}

export default MyMap;

/**
 * 
 * initMap() {
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
      //this.props.onMarkerPlaced(event.latLng);
    });

    function placeMarker(location) {
      marker = new google.maps.Marker({
        position: location
      });
      marker.setMap(map);
    }
  }
 */
import * as React from "react";

export interface MyMapProps {
  onMarkerPlaced: Function;
}

export interface MyMapState {}

class MyMap extends React.Component<MyMapProps, MyMapState> {
  map = undefined;
  marker = undefined;
  counter = 0;
  initMap = () => {
    var myLatLng = { lat: -25.363, lng: 131.044 };

    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng
    });
    google.maps.event.addListener(this.map, "click", event => {
      if (this.counter === 0) {
        this.placeMarker(event.latLng);
        this.counter++;
      } else {
        this.marker.setPosition(event.latLng);
      }
      console.log(this.props);
      this.props.onMarkerPlaced(event.latLng);
    });
  };
  placeMarker = location => {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
  };

  componentDidMount() {
    console.log(this.initMap);
    if (this.initMap === undefined) {
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
        var myLatLng = { lat: -25.363, lng: 131.044 };

        this.map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: myLatLng
        });
        google.maps.event.addListener(this.map, "click", event => {
          if (this.counter === 0) {
            this.placeMarker(event.latLng);
            this.counter++;
          } else {
            this.marker.setPosition(event.latLng);
          }
          console.log(this.props);
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
    return <div id="map" style={{ height: "50%", width: "50%" }} />;
  }
}

export default MyMap;
