import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpComment from './MatchUpComment';

class MatchUpComments extends Component {

  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      newComment : "",
      isNewComment: false,
      commentList :["Test Comment"]
    };

    this.handleNewComment = this.handleNewComment.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  handleNewComment() {
    this.setState({
      isNewComment: true
    });
  }

  handleSubmitComment() {
    let commentList = this.state.commentList;
    commentList.push(this.state.newComment);
    this.setState({      
      isNewComment: false,      
      newComment : "",
      commentList: commentList
    });

    this.setState({
      isNewComment: false
    });
  }

  handleCancelSubmit() {
    this.setState({
      isNewComment: false,
      newComment : ""
    });
  }

  handleCommentChange(event) {
    this.setState({newComment: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <h5>Comments</h5>
          </div>
        </div>
        {this.state.commentList.length==0? <div class="cs-comments-list"><div class="alert alert-warning">Be the first to submit a comment!</div></div> : ""}
        
        <div className="row cs-comments-list list-unstyled">
          {this.state.commentList.map((comment, index) =>
            index<3 ? <MatchUpComment comment={comment}/> : null
          )}
        </div>
        
        <div class="cs-champion-view-all">
          {this.state.isNewComment ? (
            <form><div class="form-group">
              <input type="text" class="form-control" placeholder="Title" />
            </div>
              <fieldset class="form-group">
                <textarea class="form-control" rows="3" value={this.state.newComment} onChange={this.handleCommentChange}></textarea>
              </fieldset>
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <button class="btn btn-primary btn-sm" type="submit" onClick={this.handleSubmitComment}>Submit</button
                  ></li>
                <li class="list-inline-item">
                  <button class="btn btn-secondary btn-sm" type="button" onClick={this.handleCancelSubmit}>Cancel</button>
                </li>
              </ul>
            </form>
          ) : (
              <button class="btn btn-primary btn-sm btn-block" type="button" onClick={this.handleNewComment}>Submit a new comment</button>
            )}
            {this.state.commentList.length>3? <a class="btn btn-secondary btn-sm btn-block" href="/matchup/fullcomments">View more</a> : null}
        </div>
      </div>
    );
  }
}

export default MatchUpComments;