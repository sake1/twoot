import React from "react"
import { connect } from "react-redux"

import { fetchTweet, clearUserInfo, inputErrorNotify, gotoLogin, uploadTweet, deleteTwootById, selectTwoot, updateTwoot, deselectTwoot } from "../actions/homepageAction"

import HomepageHeader from "./HomepageHeader"
import HomepageTwoots from "./HomepageTwoots"

@connect((storage) => {
  return {
    user: JSON.parse(storage.user.user),
    tweets: storage.tweets.tweets,
    selectedTweet: storage.tweets.selectedId
  };
})
export default class HOMEPAGE extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchTweet(this.props.user))
  }

  signout() {
    this.props.dispatch(clearUserInfo());
    this.props.dispatch(gotoLogin());
  }

  twoot(content) {
    console.log(content);
    if(content.content == "") {
      this.props.dispatch(inputErrorNotify({
        data: {
          message: "Content is missing"
        }
      }));
      return;
    }
    this.props.dispatch(uploadTweet(this.props.user, content));
  }

  deleteTwoot(id) {
    this.props.dispatch(deleteTwootById(this.props.user, id));
  }

  selectTwoot(id) {
    this.props.dispatch(selectTwoot(id))
  }

  deselectTwoot() {
    this.props.dispatch(deselectTwoot())
  }

  updateTwoot(id, content) {
    this.props.dispatch(updateTwoot(this.props.user, {
      twootId: id,
      "content": content
    }))
  }

  render() {
    var mappedTweets = this.props.tweets.map(tweet => <li key={tweet.id}>{tweet.content}</li>)
    if(mappedTweets.length == 0) {
      mappedTweets = "Gibt es keine twoots";
    }
    return <div>
      <HomepageHeader
        username={this.props.user.user.username}
        fullname={this.props.user.user.fullname}
        signout={() => this.signout()} />
      <HomepageTwoots
        tweets={this.props.tweets}
        selectedTweet={this.props.selectedTweet}
        onUploadBtnClick={(content) => this.twoot(content)}
        deleteTwoot={(id) => this.deleteTwoot(id)}
        selectTwoot={(id) => this.selectTwoot(id)}
        deselectTwoot={() => this.deselectTwoot()}
        updateTwoot={(id, twoot) => this.updateTwoot(id, twoot)}/>
    </div>
  }
}
