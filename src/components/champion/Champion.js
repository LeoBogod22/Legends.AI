import React, { Component } from 'react'
import ChampionTitle from './ChampionTitle'
import ChampionContent from './ChampionContent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import ChampionFullCounterTips from './ChampionFullCounterTips'

class Champion extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <ChampionTitle />
        </div>
        <div className="col">
          <hr />
        </div>
        <div className="row">
          <Switch>
            <Route exact path="/champions/:name/countertips" component={ChampionFullCounterTips} />
            <Route exact path="/champions/:name" component={ChampionContent} />            
          </Switch>
          {/* <ChampionContent/> */}
        </div>
      </div>
    );
  }
}

export default Champion;