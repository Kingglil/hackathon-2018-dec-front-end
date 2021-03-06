import * as React from "react";
import { Component } from "react";

export interface RegisterProps {
  onClick: Function;
}

export interface RegisterState {
  username: string;
  password: string;
  confirmPassword: string;
  secondName: string;
  firstName: string;
  email: string;
}

class Register extends React.Component<RegisterProps, RegisterState> {
  maxLength = 20;
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
      confirmPassword: undefined,
      secondName: undefined,
      firstName: undefined,
      email: undefined
    };
  }
  componentDidMount() {
    (window as any).counter("username");
  }
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
  handleEmail = e => {
    this.setState({ email: e.target.value });
  };
  buttonClick = () => {
    let re = /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let { username, password, confirmPassword, email } = this.state;

    if (
      password === confirmPassword &&
      username.length <= this.maxLength &&
      re.test(email)
    ) {
      console.log(1);
      this.props.onClick(1, {
        username: username,
        password: password,
        email: email,
        fullName: this.state.firstName + " " + this.state.secondName
      });
    } else console.log(0);
  };
  render() {
    return (
      <div
        id="register"
        className="col s12 m8 offset-m2 l6 offset-l3"
        style={{ width: "35%" }}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            this.buttonClick();
          }
        }}
      >
        <div
          id="RegisterInputField"
          className="card-panel grey lighten-5 z-depth-1"
        >
          <div className="row valign-wrapper">
            <div className="col s12">
              <h4 id="registertext">Регистрирай се</h4>
              <div className="input-field">
                <input
                  value={this.state.firstName}
                  onChange={this.handleFirstName}
                  id="first_name"
                  type="text"
                  placeholder="Стоян"
                  autoFocus
                />
                <label className="active" htmlFor="first_name">
                  Име
                </label>
              </div>
              <div className="input-field">
                <input
                  value={this.state.secondName}
                  onChange={this.handleSecondName}
                  id="second_name"
                  type="text"
                  placeholder="Колев"
                />
                <label className="active" htmlFor="second_name">
                  Фамилия
                </label>
              </div>
              <div className="input-field">
                <input
                  value={this.state.username}
                  onChange={this.handleUsername}
                  id="username"
                  type="text"
                  data-length={this.maxLength}
                  placeholder="tejkinokauti"
                />
                <label className="active" htmlFor="username">
                  Потребителско име
                </label>
              </div>
              <div className="input-field">
                <input
                  value={this.state.email}
                  onChange={this.handleEmail}
                  id="email"
                  type="text"
                  placeholder="example@example.example"
                />
                <label className="active" htmlFor="email">
                  E-mail
                </label>
              </div>
              <div className="input-field">
                <input
                  value={this.state.password}
                  onChange={this.handlePassword}
                  id="password"
                  type="password"
                  placeholder="akciqRespekt123"
                />
                <label className="active" htmlFor="password">
                  Парола
                </label>
              </div>
              <div className="input-field">
                <input
                  onChange={this.handleConfirmPassword}
                  id="password2"
                  type="password"
                  placeholder="akciqRespekt123"
                />
                <label className="active" htmlFor="password2">
                  Потвърдете парола
                </label>
              </div>
              <button
                className="pure-button pure-button-primary login-button"
                style={{
                  textAlign: "center"
                }}
                onClick={this.buttonClick}
              >
                Регистрирай се
              </button>
              <p style={{ color: "var(--color-1)" }}>
                <small>Стоян Колев няма нищо общо с този проект.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

/*<div>
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
      </div> */
