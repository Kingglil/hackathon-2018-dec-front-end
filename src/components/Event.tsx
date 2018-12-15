import * as React from "react";
import { Component } from "react";
import { Card, CardTitle } from "react-materialize";

import { Event } from "./types";

const imagePlaceholder = require("./res/image_placeholder.png");

interface EventComponentProps {
  event: Event;
}

interface EventComponentState {}

class EventComponent extends React.Component<EventComponentProps, EventComponentState> {

  static defaultProps = {
    event: {
      name: "No name",
      image: imagePlaceholder,
      description: "No desc"
    }
  }

  render() {
    return (
      <div className="row" style={{ maxHeight: "400", maxWidth: "400", padding: "20px" }}>
        <div className="card">
          <div className="card-image">
            <img height="400" width="400" src={this.props.event.image} />
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
    );
  }
}

export default EventComponent;
