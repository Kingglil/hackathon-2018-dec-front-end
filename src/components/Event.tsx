import * as React from "react";
import { Component } from "react";
import { Card, CardTitle } from "react-materialize";

import { Event } from "./types";

interface EventComponentProps {
  event: Event;
}

interface EventComponentState {}

class EventComponent extends React.Component<EventComponentProps, EventComponentState> {
  render() {
    return (
      <div className="row" style={{ maxHeight: "352", maxWidth: "480" }}>
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img height="352" width="480" src={this.props.event.image} />
              <span className="card-title" style={{ color: "blue" }}>
                {this.props.event.name}
              </span>
            </div>
            <div className="card-content" />
            <div className="card-action">
              <p>{this.props.event.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventComponent;
