import * as React from "react";
import { Router, Route, Switch } from "react-router";
import App from "../components/App";
import { BrowserRouter, Link } from "react-router-dom";

import { Account, Event } from "./types";
import Navbar from "./Navbar";
import DiscoverPage from "./DiscoverPage";
import FriendList from "./FriendList";
import PersonalCreatedEventsPage from "./PersonalCreatedEventsPage";
import CreateEventPage from "./CreateEventPage";
import { fetchPost } from "./lib";

interface AppRouterProps {
  account: Account;
}

interface AppRouterState {
  otherEvents: Event[];
  newEvents: Event[];
  hotEvents: Event[];
  personalEvents: Event[];
  createdEvents: Event[];
}

class AppRouter extends React.Component<AppRouterProps, AppRouterState> {
  constructor(props) {
    super(props);
    this.state = {
      otherEvents: [],
      newEvents: [],
      hotEvents: [],
      personalEvents: [],
      createdEvents: []
    };
  }

  componentDidMount() {
    if (this.props.account !== undefined) {
      fetchPost("getEvents", {
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
        .then(data => {
          this.setState({
            hotEvents: [data]
          });
        });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div id="app-container">
          <FriendList friendList={this.props.account.friendList} />
          <div id="navbar">
            <Link to="/created">
              <button className="pure-button pure-button-primary navbar-item">
                Created Events
              </button>
            </Link>
            <Link to="/personal">
              <button className="pure-button pure-button-primary navbar-item">
                Personal Events
              </button>
            </Link>
            <Link to="/">
              <button className="pure-button pure-button-primary navbar-item">
                Discover
              </button>
            </Link>
            <Link to="/createEvent">
              <button className="pure-button pure-button-primary navbar-item">
                Create Event
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
