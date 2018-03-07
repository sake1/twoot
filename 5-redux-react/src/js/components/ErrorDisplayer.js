import React from "react"
import { connect } from "react-redux"

@connect((storage) => {
  return {};
})
export default class ErrorDisplayer extends React.Component {
  render() {
    console.log("error trace: ", this.props.message);
    const message = JSON.parse(this.props.message);
    var errorString = "";
    if(message != null) {
      errorString = "ERROR";
      if(message.hasOwnProperty("status") && message.hasOwnProperty("status")) {
        errorString = errorString + " " + message.status + ": " + message.statusText;
      }
    }
    return <div>
      <center>
        <font color="red">
          {errorString}
        </font>
      </center>
    </div>
  }
}
