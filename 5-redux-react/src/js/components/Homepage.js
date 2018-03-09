import React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"

import { fetchTweet, clearUserInfo, inputErrorNotify, gotoLogin, uploadTweet, deleteTwootById, selectTwoot, updateTwoot, deselectTwoot } from "../actions/homepageAction"
import ActionList from "../actionList";

import HomepageHeader from "./HomepageHeader"
import HomepageTwoots from "./HomepageTwoots"

// @connect((storage) => {
//   return {
//     user: JSON.parse(storage.user.user),
//     tweets: storage.tweets.tweets,
//     selectedTweet: storage.tweets.selectedId
//   };
// })
class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentWillMount() {
    console.log(this.props.user);
    this.props.fetchTweet(this.props.user);
  }

  signout() {
    this.props.clearUserInfo();
    this.props.gotoLogin();
  }

  twoot(content) {
    console.log(content);
    if(content.content == "") {
      this.props.inputErrorNotify({
        data: {
          message: "Content is missing"
        }
      });
      return;
    }
    this.props.uploadTweet(this.props.user, content);
  }

  deleteTwoot(id) {
    this.props.deleteTwootById(this.props.user, id);
  }

  selectTwoot(id) {
    this.props.selectTwoot(id);
  }

  deselectTwoot() {
    this.props.deselectTwoot();
  }

  updateTwoot(id, content) {
    this.props.updateTwoot(this.props.user, {
      twootId: id,
      "content": content
    })
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

const mapStateToProps = function(storage) {
  return {
    user: JSON.parse(storage.user.user),
    tweets: storage.tweets.tweets,
    selectedTweet: storage.tweets.selectedId
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchTweet: user => dispatch({
      type: ActionList.ON_TWEET_FETCH,
      payload: user
    }),
    clearUserInfo: () => dispatch({
      type: ActionList.CLEAR_USER_INFO,
    }),
    gotoLogin: () => dispatch({
      type: ActionList.ON_GOTO_LOGIN,
    }),
    uploadTweet: (user, tweet) => dispatch({
      type: ActionList.ON_TWEET_UPLOAD,
      payload: {
        "user": user,
        "tweet": tweet
      }
    }),
    inputErrorNotify: message => dispatch({
      type: ActionList.ON_INPUT_ERROR,
      payload: message
    }),
    deleteTwootById: (user, id) => dispatch({
      type: ActionList.ON_TWEET_DELETE,
      payload: {
        "user": user,
        "id": id
      }
    }),
    selectTwoot: id => dispatch({
      type: ActionList.ON_TWEET_SELECTED,
      payload: {
        "id": id
      }
    }),
    deselectTwoot: event => dispatch({
      type: ActionList.ON_TWEET_DESELECTED,
    }),
    updateTwoot: (user, twoot) => dispatch({
      type: ActionList.ON_TWEET_UPDATE,
      payload: {
        "user": user,
        "twoot": twoot
      }
    })
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Homepage);
