import * as React from "react";
import { Event } from "./types";
import { Account } from "./types";;
import EventComponent from "./Event";

interface DiscoverPageProps {
  account: Account;
  events: {
    other: Event[];
    new: Event[];
    hot: Event[];
  }
}

interface DiscoverPageState {
  
}

class DiscoverPage extends React.Component<
  DiscoverPageProps,
  DiscoverPageState
> {
  constructor(props: DiscoverPageProps) {
    super(props);
    this.state = {};
  }

  render() {

    const items = this.props.events.other.map((value) => <EventComponent event={value} />)

    return (
      <div id="discover-page">
        <div id="other-events" className="grid-item">
          <div className="inner-item">
            <div className="events-titles">
              Отркрий събития
              <div>
                {items === null ? <></> : items}
              </div>
            </div>
          </div>
        </div>
        <div id="common-events">
          <div id="hot-events" className="grid-item-2">
            <div className="inner-item">
              <div className="events-titles">Популярни събития</div>
            </div>
          </div>
          <div id="new-events" className="grid-item-3">
            <div className="inner-item">
              <div className="events-titles">Нови събития</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverPage;
