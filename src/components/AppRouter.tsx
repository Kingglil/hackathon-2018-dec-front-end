import * as React from "react";
import { Router, Route, Switch } from "react-router";
import App from "../components/App";
import { BrowserRouter, Link } from "react-router-dom";

import { Account } from "./types";
import Navbar from "./Navbar";
import DiscoverPage from "./DiscoverPage";
import FriendList from "./FriendList";
import PersonalCreatedEventsPage from "./PersonalCreatedEventsPage";
import CreateEventPage from "./CreateEventPage";

interface AppRouterProps {
  account: Account;
}

class AppRouter extends React.Component<AppRouterProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <div id="app-container">
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
          <FriendList
            account={{
              fullname: "stoqn kolev",
              username: "a",
              friendList: [
                {
                  fullname: "Мирослав Патрашков",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                },
                {
                  fullname: "stoqn kolev2",
                  username: "a",
                  friendList: undefined
                }
              ]
            }}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <DiscoverPage
                  {...props}
                  account={this.props.account}
                  events={[]}
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
