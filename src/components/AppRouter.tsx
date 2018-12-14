import * as React from "react";
import { Router, Route, Switch } from "react-router";
import App from "../components/App";
import { BrowserRouter, Link } from "react-router-dom";

import { Account } from "./types";

interface AppRouterProps {
    account: Account
}

class AppRouter extends React.Component<AppRouterProps, {}> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;