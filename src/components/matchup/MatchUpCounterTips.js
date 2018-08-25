import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpCounterTip from './MatchUpCounterTip';
class MatchUpCounterTips extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      newTip : "",
      isNewCounterTip: false,
      tipList :[]
    };

    this.handleNewCounterTip = this.handleNewCounterTip.bind(this);
    this.handleSubmitCounterTip = this.handleSubmitCounterTip.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleNewTipChange = this.handleNewTipChange.bind(this);
  }
  
  handleNewCounterTip() {
    this.setState({
      isNewCounterTip: true
    });
  }
  
  handleSubmitCounterTip() {
    let tipList = this.state.tipList;
    tipList.push(this.state.newTip);
    this.setState({      
      isNewCounterTip: false,      
      newTip : "",
      tipList: tipList
    });
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

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <h5>Counter Tips</h5>
          </div>
        </div>
        {this.state.tipList.length==0? <div class="cs-counter-tips-list"><div class="alert alert-warning">Be the first to submit a counter tip!</div></div> : ""}
        <div className="row" class="cs-counter-tips-list">
        {this.state.tipList.map((tip, index) =>
          index<3 ? <MatchUpCounterTip counterTip={tip}/> : null
        )}          
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
      </div>
    );
  }
}

export default MatchUpCounterTips;