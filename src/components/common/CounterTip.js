import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { CounterTipsRef } from '../reference';
import app from "../../config/dev";
import { Route, withRouter } from "react-router";

import { Redirect, Link } from 'react-router-dom';
const defaultProps = {
  counterTip: {}
};

class CounterTip extends Component {
   constructor(props) {
    super(props);

    // Set initial State
    this.state = {
      newTip: "",
      isNewCounterTip: false,
      tipList: [],
      loading: true,
      email : '',
      authenticated: false,
      user_id : ''
    };
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
           user_id: null,
          authenticated: false
        })
      }
      alert(this.state.user_id);
    });

 
  }
  
   downvotePost(key, vote, user_id) {
this.setState({
user_id: app.auth().currentUser.uid

}) 

if (this.state.user_id !=null )
{

alert(this.state.user_id);
let user_id= this.state.user_id;
let votes = { user_id: true}; 

vote--;
CounterTipsRef.child(key).update({ 'vote': vote, 'votes': votes }); 
}

else {

this.props.history.push('/login');
}


  }

  upvotePost(key, vote, user_id) {
    
this.setState({
user_id: app.auth().currentUser.uid

}) 

if (this.state.user_id !=null )
{

alert(this.state.user_id);
let user_id= this.state.user_id;
let votes = { user_id: true}; 

vote++;
CounterTipsRef.child(key).update({ 'vote': vote, 'votes': votes }); 
}

else {

this.props.history.push('/login');
}


  }
  render() {
    const { counterTip } = this.props

    return (
      <div>
        <div class="cs-counter-tip">
          <div class="cs-counter-tip-score-alt">
            <div class="cs-counter-tip-vote-alt cs-counter-tip-upvote-alt">
              <i class="fa fa-fw fa-caret-up cs-counter-tip-caret cs-counter-tip-caret-non-active cs-counter-tip-vote-alt cs-counter-tip-vote-non-active-alt"
                onClick={()=> this.upvotePost(counterTip.key, counterTip.vote, this.state.user_id)}></i>
            </div>
            <p class="cs-counter-tip-total-alt jq-counter-tip-57b4f5b5aabedb001bdcd5f3">{counterTip.vote}</p>
            <div class="cs-counter-tip-vote-alt cs-counter-tip-downvote-alt">
              <i class="fa fa-fw fa-caret-down cs-counter-tip-caret cs-counter-tip-caret-non-active cs-counter-tip-vote-alt cs-counter-tip-vote-non-active-alt"
                onClick={()=> this.downvotePost(counterTip.key, counterTip.vote, this.state.user_id)}></i>
            </div>
          </div>
          <div class="cs-counter-tip-content">
            <div>
              <p class="cs-counter-tip-text">{counterTip.text}</p>
              <div class="cs-counter-tip-footer clearfix">
                <p class="cs-comment-metadata">by <span class="text-primary">User</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

CounterTip.defaultProps = defaultProps;

export default CounterTip;

