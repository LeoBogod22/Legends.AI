import React, { Component } from 'react'
import ChampionMatchUpList from './ChampionMatchUpList'
import { connect } from 'react-redux'
import ChampionCounterTips from './ChampionCounterTips';
import ChampionStrong from './ChampionStrong'
import ChampionJngl from './ChampionJngl'
import ChampionAdc from './ChampionAdc'
import {Tabs, Tab} from 'react-bootstrap';
import {persistCombineReducers} from 'redux-persist'
class ChampionContent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: 0   
    };

   
  }

 
  render() {
    var matchTypeList = [
  { name: 'Top', isActive: true },
  { name: 'middle', isActive: false },
  { name: 'Tab 3', isActive: false }
];
    return (
      <div className="container">
        <div className="row">
          <ChampionCounterTips />          
        </div>
        <div className="col">
          <hr />
        </div>
        <div className="row">                  
          <div className="cs-tabs-container">
            <ul className="nav nav-tabs">
              <li className="tab-pane active"><a href="#tab1" data-toggle="tab">All</a></li>
              <li><a href="#tab2" data-toggle="tab">Jungle</a></li>
              <li><a href="#tab3" data-toggle="tab">ADC</a></li>
            </ul>

            <div className="tab-content" style={{margin:"30px"}}>
              <div className="tab-pane active" id="tab1">
                
                <div className="row" style={{marginTop:20}}>                
                  <div class="col-lg-6">
                    <ChampionMatchUpList status="is weak against"/>
                  </div>
                  <div class="col-lg-6">
                    <ChampionStrong status="is strong against"/>
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

              <div className="tab-pane" id="tab2">
        <div className="row" style={{marginTop:20}}>                
                  <div class="col-lg-6">
                    <ChampionJngl status="is weak against"/>
                  </div>

                   <div class="col-lg-6">
                    <ChampionStrong status="is strong against"/>
                  </div>
       
                </div>
                  </div>
              <div className="tab-pane" id="tab3">
             <div className="row" style={{marginTop:20}}>                
                  <div class="col-lg-6">
                    <ChampionAdc status="is weak against"/>
                  </div>
                   <div class="col-lg-6">
                    <ChampionStrong status="is strong against"/>
                  </div>

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