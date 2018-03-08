import React from "react"

export default class HomepageHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
    var mappedTweets = this.props.tweets.map(tweet => {
      if(tweet.id == this.props.selectedTweet) {
        console.log(this);
        return <div key={tweet.id}>
          <input
            id="edit"
            type="text"
            defaultValue={tweet.content} />
          <button onClick={() => this.props.updateTwoot(tweet.id, document.getElementById("edit").value)}>UPDATE</button>
          <button onClick={() => this.props.deselectTwoot()}>CANCEL</button>
        </div>
      } else {
        return <div key={tweet.id}>
          <h4>
            {tweet.content}
            <button onClick={() => this.props.deleteTwoot(tweet.id)}>DELETE</button>
            <button onClick={() => this.props.selectTwoot(tweet.id)}>CHANGE</button>
          </h4>
        </div>
      }
    })
    if(mappedTweets.length == 0) {
      mappedTweets = "You have no Twoot";
    }
    return <div>
      <h3>List of Twoots</h3>
      <div>{mappedTweets}</div>
      <textarea
        placeholder="Create new Twoot..."
        value={this.state.content}
        onChange={evt => this.updateNewTwoot(evt)} />
      <button
        onClick={() => {
          this.props.onUploadBtnClick(this.state);
          this.setState({
            content: ""
          });
        }}> TWOOT </button>
    </div>
  }

  updateNewTwoot(evt) {
    this.setState({
      content: evt.target.value
    });
  }
}
