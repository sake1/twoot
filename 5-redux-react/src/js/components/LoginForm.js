import React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"

import { login, gotoSignin } from "../actions/loginAction"
import ActionList from "../actionList";

// @connect((storage) => {
//   return {
//     user: JSON.parse(storage.user.user)
//   };
// })
class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user ? (this.props.user.hasOwnProperty("username") ? this.props.user.username : "") : "",
      password: ""
    };
  }

  // login() {
  //   this.props.dispatch(login(this.state));
  // }
  //
  // signin() {
  //   this.props.dispatch(gotoSignin());
  // }

  render() {
    return <div>
      <h1><b> TWOOT </b></h1>
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
      <button onClick={this.props.login(this.state)}> LOGIN </button>
      <button onClick={this.props.gotoSignin}> SIGNIN </button>
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

const mapStateToProps = function(storage) {
  return {
    user: JSON.parse(storage.user.user)
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    login: user => event => dispatch({
      type: ActionList.ON_LOGIN,
      payload: user
    }),
    gotoSignin: event => dispatch({
      type: ActionList.ON_GOTO_SIGNIN,
    })
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LoginForm);
