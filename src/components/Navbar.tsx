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

            </div>
        );
    }
}
 
export default Navbar;