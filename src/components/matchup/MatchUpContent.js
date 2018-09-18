import React, { Component } from 'react'
import MatchUpComments from './MatchUpComments'
import MatchUpList from './MatchUpList'
import { connect } from 'react-redux'
import MatchUpCounterTips from './MatchUpCounterTips';

class MatchUpContent
  extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">          
          <div className="row" style={{ flex: 1, marginLeft: 15, marginRight:10}}>
            <MatchUpCounterTips />
          </div>
          <div className="row" style={{ flex : 1, marginRight: 15, marginRight:10}}>            
            <MatchUpComments />            
          </div> 
        </div>
        <div className="col">
          <hr />
        </div>
        <div className="row">
          <MatchUpList />
        </div>
      </div>
    );
  }
}

export default MatchUpContent
  ;