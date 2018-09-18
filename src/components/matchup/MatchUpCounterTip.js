import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
  counterTip: PropTypes.string
};

const defaultProps = {
  counterTip: "How to beat (or survive) lane as Teemo: Just put 3 points into your q early on and stay back, teemos q has a range of 580 whilst pantheons abilities have a range of 500 so just q whenever you can. Get Liandries as fast as you can and stay back in lane and most importantly dont let yourself be pushed under tower and in case of both lanes winning or not being in need of ganks beg your jungler for ganks good luck"
};

class MatchUpCounterTip extends Component {
  render() {
    return (
      <div>
        <div class="cs-counter-tip">
          <div class="cs-counter-tip-score-alt">
            <div class="cs-counter-tip-vote-alt cs-counter-tip-upvote-alt">
              <i class="fa fa-fw fa-caret-up cs-counter-tip-caret cs-counter-tip-caret-non-active cs-counter-tip-vote-alt cs-counter-tip-vote-non-active-alt"></i>
            </div>
            <p class="cs-counter-tip-total-alt jq-counter-tip-57b4f5b5aabedb001bdcd5f3">6</p>
            <div class="cs-counter-tip-vote-alt cs-counter-tip-downvote-alt">
              <i class="fa fa-fw fa-caret-down cs-counter-tip-caret cs-counter-tip-caret-non-active cs-counter-tip-vote-alt cs-counter-tip-vote-non-active-alt"></i>
            </div>
          </div>
          <div class="cs-counter-tip-content">
            <div>
              <p class="cs-counter-tip-text">{this.props.counterTip}</p>
              <div class="cs-counter-tip-footer clearfix">
                <p class="cs-comment-metadata">by <span class="text-primary">Varph2</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

MatchUpCounterTip.propTypes = propTypes;
MatchUpCounterTip.defaultProps = defaultProps;

export default MatchUpCounterTip;