import React, { Component } from 'react'
import ChampionMatchUpList from './ChampionMatchUpList'
import { connect } from 'react-redux'
import ChampionCounterTips from './ChampionCounterTips';
import classnames from 'classnames';

class ChampionContent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: 0   
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab != tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    let matchTypeList = ["All", "General", "Top", "Middle", "Bottom", "Jungle"];
    return (
      <div className="container">
        <div className="row">
          <ChampionCounterTips />
        </div>
        <div className="col">
          <hr />
        </div>
        <div className="row">          
          <div class="cs-tabs-container">
            <div class="cs-tabs-nav">
              <ul class="nav nav-tabs" style={{marginLeft:30, marginRight:30}}>
              {
                Array(6).fill(1).map((el, index) =>
                <li key={index} class="nav-item">
                  <a key={index} class={"nav-link " + (this.state.activeTab == index ? "active" : "")} href="javascript:;" onClick={(e)=> this.toggle(index)}>{matchTypeList[index]}</a>
                </li>
              )}
              </ul>
            </div>
            <div>              
              <div className="row" style={{marginTop:20}}>                
                <div class="col-lg-6">
                  <ChampionMatchUpList status="is weak against"/>
                </div>
                <div class="col-lg-6">
                  <ChampionMatchUpList status="is strong against"/>
                </div>
              </div>              
              <div className="row" style={{marginTop:30}}>
                <div class="col-lg-6">
                  <ChampionMatchUpList status="goes well with"/>
                </div>
                <div class="col-lg-6">
                  <ChampionMatchUpList status="goes even with"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChampionContent;