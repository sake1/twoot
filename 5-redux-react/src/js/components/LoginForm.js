import React from "react"
import { connect } from "react-redux"

import { login, gotoSignin } from "../actions/loginAction"

@connect((storage) => {
  return {
    username: storage.user.user.username,
    password: storage.user.user.password,
  };
})
export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      password: this.props.password
    };
  }

  login() {
    this.props.dispatch(login(this.state));
  }

  signin() {
    this.props.dispatch(gotoSignin());
  }

  render() {
    return <div>
      <div>
        Username: <input
          type="text"
          value={this.state.username}
          onChange={evt => this.updateUsername(evt)} />
      </div>
      <div>
        Password: <input
        type="password"
        value={this.state.password}
        onChange={evt => this.updatePassword(evt)} />
      </div>
      <button onClick={() => this.login()}> LOGIN </button>
      <button onClick={() => this.signin()}> SIGNIN </button>
    </div>
  }

  updateUsername(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  updatePassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }
}
