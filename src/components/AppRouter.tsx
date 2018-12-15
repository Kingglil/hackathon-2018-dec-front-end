import * as React from "react";
import { Router, Route, Switch } from "react-router";
import App from "../components/App";
import { BrowserRouter, Link } from "react-router-dom";

import { Account } from "./types";
import Navbar from "./Navbar";
import DiscoverPage from "./DiscoverPage";

interface AppRouterProps {
    account: Account
}

class AppRouter extends React.Component<AppRouterProps, {}> {
    render() {
        return (
            <BrowserRouter>
                <div id="app-container">
                    <Navbar account={this.props.account}/>
                    <Switch>
                        <Route path="/">
                            <DiscoverPage account={this.props.account} events={[]}/>
                        </Route>
                        <Route path="/personal">
                            
                        </Route>
                        <Route path="/created">
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;