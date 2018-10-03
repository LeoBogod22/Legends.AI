import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpComment from './MatchUpComment';
import app from "../../config/dev";
import { ChampsRef, UserRef, CommentRef, timeRef } from '../reference';
class MatchUpComments extends Component {

  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      newComment : "",
      title:"",
       tipList: [],
      loading: true,
      authenticated: false,
      parentID:"",
      elo: "",
      isNewComment: false,
      commentList :["Test Comment","ldld"]
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

  handleSubmitComment(e) {
   
e.preventDefault();

      let id = CommentRef.push().key;  
        const NewComment= {
            id: id,
            rank: this.state.elo,
            title: this.state.title,
            vote: 0,
            matchup_id: this.props.matchchamp.id, 
             text: this.state.newComment,
              timestamp: timeRef,
               user_email: app.auth().currentUser.email 
    }

     if (NewComment.text.length) {
       CommentRef.push(NewComment);
  }

  }

  componentDidMount(){

    //Check Login
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentUser: user,
          email: user.email,
          authenticated: true
        })
      } else {
        this.setState({
          currentUser: null,
          authenticated: false
        })
      }
    });

 
  }

  componentWillMount(){
    //Get CounterTipList        
    let champ_id= this.props.matchchamp.id;

  CommentRef.orderByChild('matchup_id').equalTo(`${champ_id}`).on('value', (snap) => {           
      let tipList = []
      
      snap.forEach(child => {
        tipList.push({ ...child.val(), key: child.key });
      });


      this.setState({ tipList: tipList, Loading: false}); 
  console.log(tipList);

    });

  app.auth().onAuthStateChanged((user) => {
    if (user) {
        //this was the variable u were using and is undefined
      //this.props.location.state.car.id
        //alert("car has been saved!")
        this.setState({email:user.email})
      
        const user_ID=  user.uid;
            
        
      UserRef.child(`${user_ID}`).once('value', (snapshot) => {

 snapshot.forEach(shot => {

 var childData = shot.val();
 this.setState({elo: childData})

 console.log(childData);

 });

 });
 }

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
handleChange(event){
  this.setState({title: event.target.value})
}
  
      
         render() {

         const { tipList,ChampsLoading, authenticated } = this.state;
 console.log(tipList);  
    let counterTips;
    if (ChampsLoading) {
      counterTips = <div className="TaskList-empty">Loading...</div>;
    } else {
      counterTips = (
          <div>
          {tipList.length == 0 && authenticated  ? <div class="cs-counter-tips-list"><div class="alert alert-warning">Be the first to submit a counter tip!</div></div> : ""}
          <div className="row" class="cs-counter-tips-list">
            {tipList.map(tip=>(
            <div className="container">
        <div class="cs-comment cs-comment-sm">
         
          <div class="cs-comment-content">
            <span class="cs-comment-title">Title</span>
            <p class="cs-comment-metadata">Submitted 5 weaks ago <p>by</p><span class="text-primary">{tip.user_email}</span></p>
            <hr />
            <p class="cs-comment-text">{tip.text}</p>
            
              </div>
              </div>
              </div>
  ))}
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <h5>Comments</h5>
          </div>
        </div>
        {this.state.commentList.length==0? <div class="cs-comments-list"><div class="alert alert-warning">Be the first to submit a comment!</div></div> : ""}
        
        <div className="row cs-comments-list list-unstyled">
        
        </div>
        
        <div class="cs-champion-view-all">
          {counterTips}

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

const mapStateToProps = (state) => {
  return {
    champ: state.champs.champ,
    matchchamp: state.champs.matchchamp
  }
}

export default connect(mapStateToProps, null)(MatchUpComments);