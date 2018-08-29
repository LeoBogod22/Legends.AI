import React, { Component } from 'react'
import ChampionMatchUpList from './ChampionMatchUpList'
import { connect } from 'react-redux'
import ChampionCounterTips from './ChampionCounterTips';
import ChampionStrong from './ChampionStrong'
import {Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';
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
          <div class="cs-tabs-container">
           <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Tab 1">
      <div>              
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
  </Tab>
  <Tab eventKey={2} title="Tab 2">
    Tab 2 content
  </Tab>
  <Tab eventKey={3} title="Tab 3">
    Tab 3 content
  </Tab>
</Tabs>
      
          </div>
        </div>
      </div>
    );
  }
}

export default ChampionContent;