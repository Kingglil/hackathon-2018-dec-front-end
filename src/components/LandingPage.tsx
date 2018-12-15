import * as React from "react";

export interface LandingPageProps {
    onClick: Function
}
 
export interface LandingPageState {
    
}
 
class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    constructor(props: LandingPageProps) {
        super(props);
    }

    onClick = (path: number) => {
        window.history.pushState({ page: 0 }, "home");
        window.history.pushState({}, "");
        this.props.onClick(path);   
    }

    render() { 
        return (
            <div id="landing-page">
                <div id="navbar">
                    <button className="pure-button pure-button-primary navbar-item">Register</button>
                    <button onClick={() => this.onClick(1)} className="pure-button pure-button-primary navbar-item">Login</button>
                    <button onClick={() => this.onClick(2)} className="pure-button pure-button-primary navbar-item">Sotyan Kolev</button>
                </div>
                <div id="landing-page-content">
                    <div id="landing-page-left">
                        <div id="landing-page-left-content">
                            <p id="landing-page-title">The best app the world has ever seen.</p>
                        </div>
                    </div>
                    <div id="landing-page-right">
                        bfd
                    </div> 
                </div>
            </div>
        );
    }
}
 
export default LandingPage;