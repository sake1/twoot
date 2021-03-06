import React from "react"
import { connect } from "react-redux"

import { gotoLogin } from "../actions/signinAction"

import Homepage from "./Homepage"
import LoginForm from "./LoginForm"
import SigninForm from "./SigninForm"
import ErrorDisplayer from "./ErrorDisplayer"

@connect((storage) => {
  return {
    code_login    : storage.appNavigator.code_login,
    code_signin   : storage.appNavigator.code_signin,
    code_homepage : storage.appNavigator.code_homepage,
    location      : storage.appNavigator.location,
    error         : storage.appNavigator.error
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(gotoLogin())
  }

  render() {
    if(this.props.location === this.props.code_login) {
      return <div>
        <LoginForm />
        <ErrorDisplayer message={this.props.error}/>
      </div>
    } else if(this.props.location === this.props.code_signin) {
      return <div>
        <SigninForm />
        <ErrorDisplayer message={this.props.error}/>
      </div>;
    } else if(this.props.location === this.props.code_homepage) {
      return <div>
      <Homepage />
      <ErrorDisplayer message={this.props.error}/>
      </div>;
    }
  }
}
