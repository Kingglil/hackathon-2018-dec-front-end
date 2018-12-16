import * as React from "react";
import { Component } from "react";
import { Card, CardTitle } from "react-materialize";

import { Event } from "./types";
import { Link } from "react-router-dom";

const imagePlaceholder = require("./res/image_placeholder.png");

interface EventComponentProps {
  event: Event;
  height?: number;
  onClick?: Function;
}

interface EventComponentState {}

class EventComponent extends React.Component<EventComponentProps, EventComponentState> {

  static defaultProps = {
    event: {
      name: "No name",
      image: imagePlaceholder,
      description: "No desc"
    },
    height: 400
  }

  onClick = () => {
    if(this.props.onClick !== undefined) {
      this.props.onClick(this.props.event);
    }
  }

  render() {
    return (
      <Link to={"/detailedEvent/" + this.props.event.name}>
        <div onClick={this.onClick} className="row" style={{ maxWidth: "400", maxHeight: this.props.height, padding: "20px" }}>
          <div className="card">
            <div className="card-image">
              <img width="400" height={this.props.height} src={this.props.event.image} />
              <span className="card-title" style={{ color: "blue" }}>
                {this.props.event.name}
              </span>
            </div>
            <div className="card-content">
              <p className="event-card-p">{this.props.event.description}</p>
            </div>
            <div className="card-action">
              <p className="event-card-p">{this.props.event.address}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default EventComponent;
