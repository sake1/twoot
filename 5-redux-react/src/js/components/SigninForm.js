import React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"

import { signin, gotoLogin } from "../actions/signinAction"
import ActionList from "../actionList";

class SigninForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fullname: "",
      birthdate: ""
    };
  }

  // login() {
  //   console.log("sampe");
  //   this.props.dispatch(gotoLogin());
  // }
  //
  // signin() {
  //   this.props.dispatch(signin(this.state));
  // }

  render() {
    return <div>
      <h1><b> REGISTER TO TWOOT </b></h1>
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
      <button onClick={this.props.gotoLogin}> LOGIN </button>
      <button onClick={this.props.signin(this.state)}> SIGNIN </button>
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

const mapStateToProps = function(storage) {
  return {}
}

const mapDispatchToProps = function(dispatch) {
  return {
    signin: user => event => dispatch({
      type: ActionList.ON_SIGNIN,
      payload: user
    }),
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
)(SigninForm);
