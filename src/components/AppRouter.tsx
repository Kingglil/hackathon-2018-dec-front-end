import * as React from "react";
import { Router, Route, Switch } from "react-router";
import App from "../components/App";
import { BrowserRouter, Link } from "react-router-dom";

import { Account } from "./types";
import Navbar from "./Navbar";
import DiscoverPage from "./DiscoverPage";
import PersonalCreatedEventsPage from "./PersonalCreatedEventsPage";

interface AppRouterProps {
    account: Account
}

class AppRouter extends React.Component<AppRouterProps, {}> {
    render() {
        return (
            <BrowserRouter>
                <div id="app-container">
                    <div id="navbar">
                        <Link to="/created">
                            <button className="pure-button pure-button-primary navbar-item">Created Events</button>
                        </Link>
                        <Link to="/personal">
                            <button className="pure-button pure-button-primary navbar-item">Personal Events</button>
                        </Link>
                        <Link to="/">
                            <button className="pure-button pure-button-primary navbar-item">Discover</button>
                        </Link>
                    </div>
                    <Switch>
                        <Route exact path="/" 
                            render={(props) => <DiscoverPage {...props} account={this.props.account} events={[]}/>}>
                        </Route>
                        <Route exact path="/personal"
                            render={(props) => <PersonalCreatedEventsPage {...props} type={0} account={this.props.account} events={[]}/>}>
                        </Route>
                        <Route exact path="/created"
                            render={(props) => <PersonalCreatedEventsPage {...props} type={1} account={this.props.account} events={[]}/>}>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;