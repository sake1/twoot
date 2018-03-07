import React from "react"
import { connect } from "react-redux"

import { signin, gotoLogin } from "../actions/signinAction"

@connect((storage) => {
  return {};
})
export default class SigninForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fullname: "",
      birthdate: ""
    };
  }

  login() {
    console.log("sampe");
    this.props.dispatch(gotoLogin());
  }

  signin() {
    this.props.dispatch(signin(this.state));
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
      <div>
        Fullname: <input
        type="text"
        value={this.state.fullname}
        onChange={evt => this.updateFullname(evt)} />
      </div>
      <div>
        Birthdate: <input
        type="date"
        value={this.state.birthdate}
        onChange={evt => this.updateBirthdate(evt)} />
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

  updateFullname(evt) {
    this.setState({
      fullname: evt.target.value
    });
  }

  updateBirthdate(evt) {
    this.setState({
      birthdate: evt.target.value
    });
  }
}
