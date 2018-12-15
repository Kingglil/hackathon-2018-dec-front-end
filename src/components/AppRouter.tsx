import * as React from "react";
import { Router, Route, Switch } from "react-router";
import App from "../components/App";
import { BrowserRouter, Link } from "react-router-dom";

import { Account } from "./types";
import Navbar from "./Navbar";
import DiscoverPage from "./DiscoverPage";
import FriendList from "./FriendList";

interface AppRouterProps {
  account: Account;
}

class AppRouter extends React.Component<AppRouterProps, {}> {
  render() {
    return (
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
    );
  }
}

export default AppRouter;
