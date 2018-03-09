import React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"

import { gotoLogin } from "../actions/signinAction"
import ActionList from "../actionList";

import Homepage from "./Homepage"
import LoginForm from "./LoginForm"
import SigninForm from "./SigninForm"
import ErrorDisplayer from "./ErrorDisplayer"

import '@progress/kendo-theme-default/dist/all.css';
import { Grid } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';

// @connect((storage) => {
//   return {
//     code_login    : storage.appNavigator.code_login,
//     code_signin   : storage.appNavigator.code_signin,
//     code_homepage : storage.appNavigator.code_homepage,
//     location      : storage.appNavigator.location,
//     error         : storage.appNavigator.error
//   };
// })
class Layout extends React.Component {
  componentWillMount() {
    this.props.gotoLogin
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

const mapStateToProps = function(storage) {
  return {
    code_login    : storage.appNavigator.code_login,
    code_signin   : storage.appNavigator.code_signin,
    code_homepage : storage.appNavigator.code_homepage,
    location      : storage.appNavigator.location,
    error         : storage.appNavigator.error
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    gotoLogin: event => dispatch({
      type: ActionList.ON_GOTO_LOGIN,
    })
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Layout);
