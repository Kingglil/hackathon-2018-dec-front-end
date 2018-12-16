import * as React from "react";
import { Event } from "./types";
import { fetchPost } from "./lib";
import MyMapWithSetMarker from "./GoogleMapsWithSetMarkers";

export interface DetailedEventPageProps {
  match: any;
}

export interface DetailedEventPageState {
  event: Event;
}

class DetailedEventPage extends React.Component<
  DetailedEventPageProps,
  DetailedEventPageState
> {
  constructor(props: DetailedEventPageProps) {
    super(props);
    this.state = {
      event: undefined
    };
  }

  async componentDidMount() {
    let res = await fetchPost("getEventDetails", {
      name: this.props.match.name
    });
    let event = await res.json();
    console.log("The event is");
    console.log(event);

    this.setState({ event });
  }

  render() {
    console.log(this.props.match.name);
    return (
      <div id="discover-page">
        <div id="other-events" className="grid-item">
          <div className="inner-item">
            {this.state.event ? <img src={this.state.event.image} /> : <></>}
          </div>
        </div>
        <div id="common-events">
          <div id="hot-events" className="grid-item-2">
            <div className="inner-item">
              <MyMapWithSetMarker
                lat={this.state.event.location.lat}
                lon={this.state.event.location.lon}
              />
            </div>
          </div>
          <div id="new-events" className="grid-item-3">
            <div className="inner-item" />
          </div>
        </div>
      </div>
    );
  }
}

export default DetailedEventPage;
