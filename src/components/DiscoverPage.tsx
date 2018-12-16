import * as React from "react";
import { Event } from "./types";
import { Account } from "./types";
import EventComponent from "./Event";
import TinyEvent from "./TinyEvent";

interface DiscoverPageProps {
  account: Account;
  events: {
    other: Event[];
    new: Event[];
    hot: Event[];
  };
  onClick: Function;
}

interface DiscoverPageState {}

class DiscoverPage extends React.Component<
  DiscoverPageProps,
  DiscoverPageState
> {
  constructor(props: DiscoverPageProps) {
    super(props);
    this.state = {};
  }

  onClick = (event: Event) => {
    this.props.onClick(event);
  };

  render() {
    const items = this.props.events.other.map(value => (
      <div className="event-card">
        <EventComponent height={200} onClick={this.onClick} event={value} />
      </div>
    ));

    console.log(this.props.events.hot);

    const hotItems = this.props.events.hot.map(value => (
      <div className="event-card">
        <TinyEvent height={200} onClick={this.onClick} event={value} />
      </div>
    ));

    const newItems = this.props.events.new.map(value => (
      <div className="event-card">
        <TinyEvent height={200} onClick={this.onClick} event={value} />
      </div>
    ));

    return (
      <div id="discover-page">
        <div id="other-events" className="grid-item">
          <div className="inner-item">
            <div className="events-titles">
              Открий събития
              <div className="events-container">
                {items === null ? <></> : items}
              </div>
            </div>
          </div>
        </div>
        <div id="common-events">
          <div id="hot-events" className="grid-item-2">
            <div className="inner-item">
              <div className="events-titles">
                Популярни събития
                <div className="events-container">
                  {hotItems === null ? <></> : hotItems}
                </div>
              </div>
            </div>
          </div>
          <div id="new-events" className="grid-item-3">
            <div className="inner-item">
              <div className="events-titles">
                <p className="event-card-p">Нови събития</p>
                {newItems === null ? <></> : newItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverPage;
