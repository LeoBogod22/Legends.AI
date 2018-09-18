import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
  comment:  []
};

const defaultProps = {
  comment: "Akali can't do anything at all. At ALL!She tries to farm with autos? 50% hp gone. She tries to farm with Q? Annie Q range is long enough to hit her. She tries to get a gank? Annie stuns both. Pre 6 ganks for Akali are a joke, after 6 Annie stun is OP.She tries to all in? You full combo and kill her."
};

class MatchUpComment extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      isReply: false,
      isDisplayReplyList: false,
      replyCount: 0
    };

    this.handleNewReply = this.handleNewReply.bind(this);
    this.handleSubmitReply = this.handleSubmitReply.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleDisplayReply = this.handleDisplayReply.bind(this);
  }

  handleDisplayReply() {
    this.setState({
      isDisplayReplyList: !this.state.isDisplayReplyList,
    });
  }

  handleNewReply() {
    this.setState({
      isReply: !this.state.isReply,
    });
  }

  handleSubmitReply() {
    this.setState({
      isReply: false,
      replyCount: this.state.replyCount + 1
    });
  }

  handleCancelSubmit() {
    this.setState({
      isReply: false
    });
  }

  render() {
    return (
      <div className="container">
        <div class="cs-comment cs-comment-sm">
          <div class="cs-comment-score">
            <div class="cs-comment-vote cs-comment-upvote">
              {/* <i class="fa fa-fw fa-caret-up cs-comment-vote"></i> */}
              <i class="fa fa-fw fa-caret-up cs-comment-vote cs-comment-vote-non-active"></i>
            </div>
            <p class="cs-comment-total jq-comment-57b4f02caabedb001bdcc431">13</p>
            <div class="cs-comment-vote cs-comment-downvote">
              {/* <i class="fa fa-fw fa-caret-down cs-comment-vote cs-comment-vote-active"></i> */}
              <i class="fa fa-fw fa-caret-down cs-comment-vote cs-comment-vote-non-active"></i>

            </div>
          </div>
          <div class="cs-comment-content">
            <span class="cs-comment-title">IMO the 2nd hardest lane for Akali</span>
            <p class="cs-comment-metadata">Submitted 4 years ago by <span class="text-primary">AfroNinja6810</span></p>
            <hr />
            <p class="cs-comment-text">{this.props.comment}</p>
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                {this.state.replyCount == 0 ? <small class="text-muted">{this.state.replyCount} comments</small> :
                  <a href="#" onClick={this.handleDisplayReply}>
                    <small class="text-muted">{this.state.replyCount} comments</small>
                  </a>
                }
              </li>
              <li class="list-inline-item">
                <a class="cs-muted-link" href="#" onClick={this.handleNewReply}>
                  <small>reply</small></a>
              </li>
              <li class="list-inline-item"></li>
            </ul>
            {this.state.isReply ? (
              <form class="cs-comment-reply">
                <fieldset class="form-group">
                  <textarea class="form-control" rows="3"></textarea>
                </fieldset>
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <button class="btn btn-primary btn-sm" type="submit" onClick={this.handleSubmitReply}>Reply</button>
                  </li>
                  <li class="list-inline-item">
                    <button class="btn btn-secondary btn-sm" type="button" onClick={this.handleCancelSubmit}>Cancel</button>
                  </li>
                </ul>
              </form>
            ) : null}
          </div>
          {this.state.isDisplayReplyList ?
            Array(this.state.replyCount).fill(1).map((el, i) =>
              <div class="cs-comment-children">
                <div class="cs-comment cs-comment-child">
                  <div class="cs-comment-score">
                    <div class="cs-comment-vote cs-comment-upvote">
                      <i class="fa fa-fw fa-caret-up cs-comment-vote cs-comment-vote-non-active">
                      </i>
                    </div>
                    <span class="jq-comment-57b4f47aaabedb001bdcd2d3 hidden-xs-up">
                    </span>
                    <div class="cs-comment-vote cs-comment-downvote">
                      <i class="fa fa-fw fa-caret-down cs-comment-vote cs-comment-vote-non-active">
                      </i>
                    </div>
                  </div>
                  <div class="cs-comment-content">
                    <p class="cs-comment-metadata">
                      <span class="cs-comment-author text-primary">ricosuave4</span>
                      <strong>
                        <span class="jq-comment-child-57b4f47aaabedb001bdcd2d3">1</span>
                        point
                      </strong>
                      3 years ago
                    </p>
                    <p class="cs-comment-text">Very solid advice</p>
                  </div>
                </div>
              </div>)
            : null}
        </div>
      </div>
    );
  }
}

MatchUpComment.propTypes = propTypes;
MatchUpComment.defaultProps = defaultProps;

export default MatchUpComment;