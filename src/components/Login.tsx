import * as React from "react";

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
      <div>
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
    );
  }
}

export default Login;
