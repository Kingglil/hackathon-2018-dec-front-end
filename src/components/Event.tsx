import * as React from "react";
import { Component } from "react";

export interface EventProps {
  title: string;
  image: string;
  description: string;
}

export interface EventState {}

class Event extends React.Component<EventProps, EventState> {
  render() {
    return <div />;
  }
}

export default Event;
