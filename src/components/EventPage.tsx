import * as React from "react";
import MyGoogleMaps from "./GoogleMapsTest";

export interface EventPageProps {
  title: string;
  description: string;
  imagesrc: string;
  lat: number;
  long: number;
}

export interface EventPageState {}

class EventPage extends React.Component<EventPageProps, EventPageState> {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
        <img src={this.props.imagesrc} />
        <MyGoogleMaps />
      </div>
    );
  }
}

export default EventPage;
