import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpCounterTip from '../matchup/MatchUpCounterTip';
class ChampionCounterTips extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      newTip: "",
      isNewCounterTip: false,
      tipList: []
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
    alert(this.props.champ.id)
  }

  handleSubmitCounterTip() {
    let tipList = this.state.tipList;
    tipList.push(this.state.newTip);
    this.setState({
      isNewCounterTip: false,
      newTip: "",
      tipList: tipList
    });
  }

  handleCancelSubmit() {
    this.setState({
      newTip: "",
      isNewCounterTip: false
    });
  }

  handleNewTipChange(event) {
    this.setState({ newTip: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="col">
      
        </div>
      </div>
    );
  }
}

export default ChampionCounterTips;