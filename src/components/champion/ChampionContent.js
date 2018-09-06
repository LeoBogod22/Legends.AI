import React, { Component } from 'react'
import ChampionMatchUpList from './ChampionMatchUpList'
import { connect } from 'react-redux'
import ChampionCounterTips from './ChampionCounterTips';
import {matchTypeList, statusType} from '../../utils/constants'

class ChampionContent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeType: 0   
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeType != tab) {
      this.setState({
        activeType: tab
      });
    }
  }

  render() {
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
                  <a key={index} class={"nav-link " + (this.state.activeType == index ? "active" : "")} href="javascript:;" onClick={(e)=> this.toggle(index)}>{matchTypeList[index]}</a>
                </li>
              )}
              </ul>
            </div>
            <div>              
              <div className="row" style={{marginTop:20}}>                
                <div class="col-lg-6">
                  <ChampionMatchUpList statusType={statusType.WEAK} activeType={this.state.activeType}/>
                </div>
                <div class="col-lg-6">
                  <ChampionMatchUpList statusType={statusType.STRONG} activeType={this.state.activeType}/>
                </div>
              </div>              
              <div className="row" style={{marginTop:30}}>
                <div class="col-lg-6">
                  <ChampionMatchUpList statusType={statusType.WELL} activeType={this.state.activeType}/>
                </div>
                <div class="col-lg-6">
                  <ChampionMatchUpList statusType={statusType.EVEN} activeType={this.state.activeType}/>
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