import * as React from "react";
import { Component } from "react";
import { Card, CardTitle } from "react-materialize";
export interface EventProps {
  title: string;
  imagesrc: string;
  description: string;
}

export interface EventState {}

class Event extends React.Component<EventProps, EventState> {
  /*render() {
    return (
    <div>
      <p>{this.props.title}</p>
      <p>{this.props.description}</p>
      <img src={this.props.imagesrc}/>
    </div>
    );
  }*/
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="row" style={{ maxHeight: "352", maxWidth: "480" }}>
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img height="352" width="480" src={this.props.imagesrc} />
              <span className="card-title" style={{ color: "blue" }}>
                {this.props.title}
              </span>
            </div>
            <div className="card-content" />
            <div className="card-action">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
