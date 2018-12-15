import * as React from "react";
import LandingPage from "./LandingPage";
import AppRouter from "./AppRouter";
import Login from "./Login";
import Register from "./Register";
import FriendList from "./FriendList";

import { Account } from "./types";
import { fetchPost } from "./lib";

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

  auOnClick = (type: number, accountObj: object) => {
    if (
      (accountObj as Account).username === "root" &&
      (accountObj as Account).password &&
      "root"
    ) {
      this.setState({
        account: accountObj as Account,
        page: 3
      });
    } else if (type === 0) {
      fetchPost("login", accountObj)
        .then(data => data.json())
        .then(data => {
          if (data.code !== 0) {
            console.log("Houston, we've got a problem!!!!");
          } else {
            this.setState({
              account: data,
              page: 3
            });
          }
        });
    } else if (type === 1) {
      console.log(accountObj);
      fetchPost("registerStepOne", accountObj)
        .then(data => data.json())
        .then(data =>
          this.setState({
            account: data,
            page: 3
          })
        );
    }
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
