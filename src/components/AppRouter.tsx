import * as React from "react";

import { Account, Event } from "./types";
import Navbar from "./Navbar";
import DiscoverPage from "./DiscoverPage";
import FriendList from "./FriendList";
import PersonalCresatedEventsPage from "./PersonalCreatedEventsPage";
import CreateEventPage from "./CreateEventPage";
import { fetchPost } from "./lib";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import DetailedEventPage from './DetailedEventPage';

interface AppRouterProps {
  account: Account;
}

interface AppRouterState {
  otherEvents: Event[];
  newEvents: Event[];
  hotEvents: Event[];
  personalEvents: Event[];
  createdEvents: Event[];
  event: Event;
}

class AppRouter extends React.Component<AppRouterProps, AppRouterState> {
  constructor(props) {
    super(props);
    this.state = {
      otherEvents: [],
      newEvents: [],
      hotEvents: [],
      personalEvents: [],
      createdEvents: [],
      event: undefined
    };
  }

  async componentWillMount() {

    if(this.props.account !== undefined) { 
      console.log(this.props.account._id);
      
      let data = await fetchPost("getEvents", {
        id: this.props.account._id
      });
      let events = await data.json();
      this.setState({
        otherEvents: events.otherEvents,
        personalEvents: events.personalEvents,
        createdEvents: events.createdEvents
      });

      data = await fetchPost("getNewEvent", {
        id: this.props.account._id
      });
      events = await data.json();
      this.setState({
          newEvents: events
      });

      data = await fetchPost("getHotEvent", {
        id: this.props.account._id
      });
      events = await data.json();
      this.setState({
          hotEvents: events
      });
      /*fetchPost("getEvents", {
        id: this.props.account._id
      })
        .then(data => data.json())
        .then(data => {
          console.log(data);
          this.setState({
            otherEvents: data.otherEvents,
            personalEvents: data.personalEvents,
            createdEvents: data.createdEvents
          });
        });

      fetchPost("getNewEvent", {
        id: this.props.account._id
      })
        .then(data => data.json())
        .then(data => {
          this.setState({
            newEvents: [data]
          });
        });

      fetchPost("getHotEvent", {
        id: this.props.account._id
      })
        .then(data => data.json())
        .then((data) => {
            this.setState({
                hotEvents: [data]
            })
        });*/
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div id="app-container">
          <div id="navbar">
            <Link to="/created">
              <button className="pure-button pure-button-primary navbar-item">
                Събития, създадени от мен
              </button>
            </Link>
            <Link to="/personal">
              <button className="pure-button pure-button-primary navbar-item">
                Събития, на които ще ходя
              </button>
            </Link>
            <Link to="/">
              <button className="pure-button pure-button-primary navbar-item">
                Отркирий събития
              </button>
            </Link>
            <Link to="/createEvent">
              <button className="pure-button pure-button-primary navbar-item">
                Създай събитие
              </button>
            </Link>
          </div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <DiscoverPage
                  {...props}
                  account={this.props.account}
                  events={{
                    other: this.state.otherEvents,
                    new: this.state.newEvents,
                    hot: this.state.hotEvents
                  }}
                  onClick={async (event: Event) => {
                    let res = await fetchPost("getEventDetails", {
                      name: event.name,
                      id: this.props.account._id
                    });
                    let data = await res.json();
                    console.log(data);
                    this.setState({ event: data });
                  }}
                />
              )}
            />
            <Route
              exact
              path="/personal"
              render={props => (
                <PersonalCreatedEventsPage
                  {...props}
                  type={0}
                  account={this.props.account}
                  events={[]}
                />
              )}
            />
            <Route
              exact
              path="/created"
              render={props => (
                <PersonalCreatedEventsPage
                  {...props}
                  type={1}
                  account={this.props.account}
                  events={[]}
                />
              )}
            />
            <Route
              exact
              path="/createEvent"
              render={props => (
                <CreateEventPage {...props} onClick={() => {}} />
              )}
            />
            <Route
              exact
              path="/detailedEvent/:name"
              render={props => (
                <DetailedEventPage {...props} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
//a
export default AppRouter;

/*
<BrowserRouter>
        <div id="app-container">
          <Navbar account={this.props.account} />
          <FriendList
            account={{
              name: "stoqn kolev",
              friendList: [
                { name: "Мирослав Патрашков", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev3", friendList: undefined },
                { name: "stoqn kolev4", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined },
                { name: "stoqn kolev2", friendList: undefined }
              ]
            }}
          />
          <Switch>
            <Route path="/">
              <DiscoverPage account={this.props.account} events={[]} />
            </Route>
            <Route path="/personal" />
            <Route path="/created" />
          </Switch>
        </div>
      </BrowserRouter>
*/
