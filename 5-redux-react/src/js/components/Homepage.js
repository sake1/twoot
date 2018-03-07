import React from "react"
import { connect } from "react-redux"

import { fetchTweet, clearUserInfo, gotoLogin } from "../actions/homepageAction"

@connect((storage) => {
  return {
    user: JSON.parse(storage.user.user)
  };
})
export default class HOMEPAGE extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchTweet(this.props.user.id))
  }

  signout() {
    this.props.dispatch(clearUserInfo());
    this.props.dispatch(gotoLogin());
  }

  render() {
    return <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Username</td>
              <td>{this.props.user.username}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{this.props.user.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1>Welcome {this.props.user.fullname}!</h1>
      </div>
      <button onClick={() => this.signout()}> SIGNOUT </button>
    </div>
  }
}
