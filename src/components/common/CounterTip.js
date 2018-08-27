import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { CounterTipsRef } from '../reference';
import app from "../../config/dev";

const defaultProps = {
  counterTip: {}
};

class CounterTip extends Component {

  downvotePost(key, vote) {
    vote--;
    CounterTipsRef.child(key).update({ 'vote': vote });    
  }

  upvotePost(key, vote) {
    vote++;
    CounterTipsRef.child(key).update({ 'vote': vote });    
  }

  render() {
    const { counterTip } = this.props

    return (
      <div>
        <div class="cs-counter-tip">
          <div class="cs-counter-tip-score-alt">
            <div class="cs-counter-tip-vote-alt cs-counter-tip-upvote-alt">
              <i class="fa fa-fw fa-caret-up cs-counter-tip-caret cs-counter-tip-caret-non-active cs-counter-tip-vote-alt cs-counter-tip-vote-non-active-alt"
                onClick={()=> this.upvotePost(counterTip.key, counterTip.vote)}></i>
            </div>
            <p class="cs-counter-tip-total-alt jq-counter-tip-57b4f5b5aabedb001bdcd5f3">{counterTip.vote}</p>
            <div class="cs-counter-tip-vote-alt cs-counter-tip-downvote-alt">
              <i class="fa fa-fw fa-caret-down cs-counter-tip-caret cs-counter-tip-caret-non-active cs-counter-tip-vote-alt cs-counter-tip-vote-non-active-alt"
                onClick={()=> this.downvotePost(counterTip.key, counterTip.vote)}></i>
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