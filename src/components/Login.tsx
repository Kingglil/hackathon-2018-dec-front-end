import * as React from "react";
import "../index.css";

interface LoginProps {
  onClick: Function;
}
interface LoginState {
  username: string;
  password: string;
}
class Login extends React.Component<LoginProps, LoginState> {
  state = {
    username: "",
    password: ""
  };
  handleUsername = e => {
    this.setState({ username: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  loginClicked = () => {};
  render() {
    return (
      <div id="login" className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s12">
              <h4>Влез</h4>
              <input
                value={this.state.username}
                onChange={this.handleUsername}
                placeholder="Потребителско име/E-mail"
              />
              <input
                value={this.state.password}
                onChange={this.handlePassword}
                placeholder="Парола"
                type="password"
              />
              <button
                className="pure-button pure-button-primary"
                style={{
                  backgroundColor: "var(--color-1)",
                  textAlign: "center"
                }}
                onClick={this.loginClicked}
              >
                Влез
              </button>
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

/*
<div
        style={{
          position: "absolute",
          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%",
          padding: "10px",
          paddingTop: "100px",
          paddingBottom: "100px",
          border: "2px solid orange"
        }}
      >
        <input
          value={this.state.username}
          onChange={this.handleUsername}
          placeholder="username/email"
        />
        <input
          value={this.state.password}
          onChange={this.handlePassword}
          placeholder="password"
        />
        <button onClick={this.loginClicked}>Log In</button>
      </div>
      */
