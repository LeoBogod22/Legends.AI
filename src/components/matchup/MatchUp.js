import React, { Component } from 'react'
import MatchUpTitle from './MatchUpTitle'
import MatchUpContent from './MatchUpContent'
import MatchUpFullComments from './MatchUpFullComments'
import MatchUpFullCounterTips from './MatchUpFullCounterTips'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

class MatchUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <MatchUpTitle />
        </div>
        <div className="col">
          <hr />
        </div>
        <div className="row">
          <Switch>
            <Route path="/matchup" component={MatchUpContent} />
            <Route path="/matchup/fullcomments" component={MatchUpFullComments} />
            <Route path="/matchup/fullcountertips" component={MatchUpFullCounterTips} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MatchUp;