import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpCounterTip from './MatchUpCounterTip';
import * as actions from '../../actions/champs';
import {Upvote} from 'react-upvote';
import {arrowUp} from 'react-icons-kit/fa/arrowUp';
import {chevronDown} from 'react-icons-kit/fa/chevronDown'
import {chevronUp} from 'react-icons-kit/fa/chevronUp'
import { Icon } from 'react-icons-kit';

import { ChampsRef, CounterTipsRef, timeRef } from '../reference';
class MatchUpCounterTips extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      newTip : "",
      isNewCounterTip: false,
      tipList :[],
        comments: [],
         vote: 0,

        champ_id: "",
        loading: true,
        email: ""
    };



    this.handleNewCounterTip = this.handleNewCounterTip.bind(this);
    this.handleSubmitCounterTip = this.handleSubmitCounterTip.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleNewTipChange = this.handleNewTipChange.bind(this);
  }
  
  
downvotePost(key, text, vote) {
    // alert(id);
    // CommentsRef.child(id).transaction(function(Comments) {
    //   if (Comments) {
    //     Comments.vote++;
    //   }
    //  console.log('cc',Comments);
    //   return Comments;
    // });
    
    vote--;
    CounterTipsRef.child(key).update({'vote' : vote});
  }

upvotePost(key, text, vote) {
    // alert(id);
    // CommentsRef.child(id).transaction(function(Comments) {
    //   if (Comments) {
    //     Comments.vote++;
    //   }
    //  console.log('cc',Comments);
    //   return Comments;
    // });
    
    vote++;
    CounterTipsRef.child(key).update({'vote' : vote});
  }
  handleNewCounterTip() {
    this.setState({
      isNewCounterTip: true
    });
  }
  
  handleSubmitCounterTip(event) {
  
    event.preventDefault();

let id = CounterTipsRef.push().key;
        const NewComment= {
          id: id,
          vote: 0,
          matchup_id: this.props.matchchamp.id,
          text: this.state.newTip,
            timestamp: timeRef
          };



  if (NewComment.text.length) {
     CounterTipsRef.push(NewComment);

   


}
  }

  handleCancelSubmit() {
    this.setState({
      newTip : "",
      isNewCounterTip: false
    });
  }

  handleNewTipChange(event) {
    this.setState({newTip: event.target.value});
  }



 componentWillMount() {

alert('f')

let champ_id= this.props.matchchamp.id;

CounterTipsRef.orderByChild('matchup_id').equalTo(`${champ_id}`).on('value', (snap) => {
            const tasks = [];
            let comments = [];
            snap.forEach(child => {
                comments.push({...child.val(), key: child.key});
            });

            this.setState({comments: comments, Loading: false});

        console.log(comments);
        });

}

  render() {


    const {comments, ChampsLoading} = this.state;
        const orderedchamps = comments;
console.log('l',this.state.Loading);

        let commentList;

        if (ChampsLoading) {
            commentList = <div className="TaskList-empty">Loading...</div>;


        }
        else {
             
            commentList = (
                <ul className="TaskList">
                    {comments.map(comment => (

                        <div className="row">
                        <div className="col-lg-6">
                        <br></br> <br></br> <br></br>
                   
                        <div className="cs-counter-tips-list">
                        <div className="cs-counter-tip">
                      

                                 <button id="f" onClick={()=>this.upvotePost(comment.key, comment.text, comment.vote)}> <Icon  icon={chevronUp} /> </button>
                                     <div id="col" className="col-lg-6"> {comment.vote} </div>
                                 <button id="f" onClick={()=>this.downvotePost(comment.key, comment.text, comment.vote)}> <Icon  icon={chevronDown} /> </button>
                              <div><p className="cs-counter-tip-text">
                                      {comment.text}  </p> </div>
                                     

                                    

                        
                              </div></div>                          </div></div>
                      
                    ))}

                </ul>
            );
        }
    return (


      <div className="container">
        <div className="container">
          <div className="row">
            <h5>Counter Tips</h5>
            {this.props.matchchamp.id}
          </div>
        </div>
        {this.state.tipList.length==0? <div class="cs-counter-tips-list"><div class="alert alert-warning">Be the first to submit a counter tip!</div></div> : ""}
        <div className="row" class="cs-counter-tips-list">
            
        </div>

        <div class="cs-champion-view-all">

          {this.state.isNewCounterTip ? (
            <form>
              <fieldset class="form-group">
                <textarea class="form-control" rows="3"  value={this.state.newTip} onChange={this.handleNewTipChange}></textarea>
              </fieldset>

              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <button class="btn btn-primary btn-sm" type="submit" onClick={this.handleSubmitCounterTip}>Submit</button>
                </li>
                <li class="list-inline-item">
                  <button class="btn btn-secondary btn-sm" type="button" onClick={this.handleCancelSubmit}>Cancel</button>
                </li>
              </ul>
            </form>
          ) : (
              <button class="btn btn-primary btn-sm btn-block" type="button" onClick={this.handleNewCounterTip}>Submit a new counter tip</button>
            )}
            {this.state.tipList.length>3 ? <a class="btn btn-secondary btn-sm btn-block" href="/matchup/fullcountertips">View more</a> : null}
        </div>
         {commentList}
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return{
    champ: state.champs.champ,
    matchchamp : state.champs.matchchamp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    exchangeMatchChamp: () => { dispatch(actions.exchangeMatchChamp()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchUpCounterTips);