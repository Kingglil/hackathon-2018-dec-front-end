import * as React from "react";
import LandingPage from "./LandingPage";
import AppRouter from "./AppRouter";
import Login from "./Login";
import Register from "./Register";
import FriendList from "./FriendList";

import { Account } from "./types";

interface AppState {
  page: number;
  account: Account;
}

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      account: undefined
    };
  }

  componentDidMount() {
    window.onpopstate = event => {
      console.log(event);
      this.setState({ page: event.state.page });
      event.preventDefault();
    };
  }

  lpOnClick = (page: number) => {
    this.setState({ page });
  };

  auOnClick = (account: Account) => {
    this.setState({ account: account, page: 3 });
  };

  getPage = (index: number) => {
    switch (index) {
      case 0:
        return <LandingPage onClick={this.lpOnClick} />;
      case 1:
        return <Login onClick={this.auOnClick} />;
      case 2:
        return <Register onClick={this.auOnClick} />;
      case 3:
        return <AppRouter account={this.state.account} />;
    }
  };

  render() {
    const content = this.getPage(this.state.page);
    return content;
  }
}

export default App;
