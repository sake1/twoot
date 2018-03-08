import React from "react"

export default function HomepageHeader(props) {

  var theme = {
    "background-color": "lightblue"
  }
  var size = {
    width:"40px",
    height:"40px"
  };
  return (
    <div style={theme}>
      <table>
        <tbody>
          <tr>
            <td><img src="http://twittertoolsbook.com/wp-content/uploads/2013/06/funny-twitter-bird.jpg" style={size}/></td>
            <td>{props.username}</td>
            <td><button onClick={() => props.signout()}> SIGNOUT </button></td>
          </tr>
        </tbody>
      </table>
      <div>
        <h1>Hello {props.fullname}! Welcome to Twoots</h1>
      </div>
    </div>
  );
}
