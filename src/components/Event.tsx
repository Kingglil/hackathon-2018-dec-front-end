import * as React from "react";
import { Component } from "react";
import {Card, CardTitle} from 'react-materialize';
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
  render(){
    return (
    <Card className='small'
    header={<CardTitle image={this.props.imagesrc}>Card Title</CardTitle>}>
    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
    </Card>
    );}
}

export default Event;
