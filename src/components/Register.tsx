import * as React from "react";
import { Component } from "react";

export interface RegisterProps {}

export interface RegisterState {
  username: string;
  password: string;
  confirmPassword: string;
  secondName: string;
  firstName: string;
  email: string;
}

class Register extends React.Component<RegisterProps, RegisterState> {
  firstName: string;
  secondName: string;
  handleUsername = e => {
    this.setState({ username: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleConfirmPassword = e => {
    this.setState({ confirmPassword: e.target.value });
  };
  handleFirstName = e => {
    this.setState({ firstName: e.target.value });
  };
  handleSecondName = e => {
    this.setState({ secondName: e.target.value });
  };
  handleEmal = e => {
    this.setState({ email: e.target.value });
  };
  buttonClick = e => {
    let re = /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let maxLength = 20;
    let { username, password, confirmPassword, email } = this.state;
    if (
      username === confirmPassword &&
      username.length <= maxLength &&
      re.test(email)
    ) {
      console.log(1);
    } else console.log(0);
  };
  render() {
    return (
      <div>
        <input onChange={this.handleFirstName} placeholder="First Name" />
        <input onChange={this.handleSecondName} placeholder="Second Name" />
        <input onChange={this.handleUsername} placeholder="Username" />
        <input onChange={this.handleEmal} placeholder="Email" />
        <input onChange={this.handlePassword} placeholder="Password" />
        <input
          onChange={this.handleConfirmPassword}
          placeholder="Confirm Password"
        />
        <button onClick={this.buttonClick}>Submit</button>
      </div>
    );
  }
}

export default Register;
