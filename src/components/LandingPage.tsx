import * as React from "react";

const logo = require("./res/logo.png");

export interface LandingPageProps {
  onClick: Function;
}

export interface LandingPageState {}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  constructor(props: LandingPageProps) {
    super(props);
  }

  onClick = (path: number) => {
    window.history.pushState({ page: 0 }, "home");
    window.history.pushState({}, "");
    this.props.onClick(path);
  };
  //onClick={() => location.href = "https://www.youtube.com/watch?v=qVUZxuuQ_BU"}
  render() {
    return (
      <div id="landing-page">
        <div id="landing-page-navbar">
          <button
            onClick={() => this.onClick(2)}
            className="pure-button pure-button-primary navbar-item"
          >
            Регистрирай се
          </button>
          <button
            onClick={() => this.onClick(1)}
            className="pure-button pure-button-primary navbar-item"
          >
            Влез
          </button>
        </div>
        <div id="landing-page-content">
          <div id="landing-page-left">
            <div id="landing-page-left-content">
              <img className="img-logo" src={logo} />
              <p id="landing-page-title">
                ААБ помага на организаторите на събития като предоставя платформа за популяризация на събития и система за билети. Също така платформата помага и на потребителите като те получават отстъпки, имат приятели и лесна покупка на билети. 
              </p>
              <button
                onClick={() => this.onClick(1)}
                className="pure-button pure-button-primary landing-page-button"
              >
                Влез
              </button>
              <p className="margin-2">или се</p>
              <button
                onClick={() => this.onClick(2)}
                className="pure-button pure-button-primary landing-page-button"
              >
                Регистрирай
              </button>
            </div>
          </div>
          <div id="landing-page-right" />
        </div>
      </div>
    );
  }
}

export default LandingPage;
