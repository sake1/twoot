import React from "react"

export default class ErrorDisplayer extends React.Component {
  render() {
    const message = JSON.parse(this.props.message);
    console.log("error trace: ", message);
    var errorString = "";
    if(message != null) {
      errorString = "ERROR";
      if(message.hasOwnProperty("status")) {
        errorString +=  " " + message.status + ":";
      }
      if(message.hasOwnProperty("data")) {
        if(message.data.hasOwnProperty("message")) {
          errorString += " " + message.data.message;
        }
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
