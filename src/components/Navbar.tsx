import * as React from 'react';
import { Account } from './types';

export interface NavbarProps {
    account: Account
}
 
export interface NavbarState {
    
}
 
class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() { 
        return (  
            <div id="navbar">
                <button className="pure-button pure-button-primary navbar-item">Created Events</button>
                <button className="pure-button pure-button-primary navbar-item">Personal Events</button>
                <button className="pure-button pure-button-primary navbar-item">Discover</button>
            </div>
        );
    }
}
 
export default Navbar;