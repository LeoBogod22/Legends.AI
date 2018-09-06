import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpItem from '../common/MatchUpItem';
import { statusStringList, statusType } from '../../utils/constants'
import { read } from 'fs';

class ChampionMatchUpList extends Component {
  constructor(props) {
    super(props);

    var matchupList = []
    switch (this.props.statusType) {
      case statusType.WEAK:
        matchupList = this.props.champ.weak == null ? [] : this.props.champ.weak
        break;
      case statusType.STRONG:
        matchupList = this.props.champ.strong == null ? [] : this.props.champ.strong
        break;
      case statusType.WELL:
        matchupList = this.props.champ.well == null ? [] : this.props.champ.well
        break;
      case statusType.EVEN:
        matchupList = this.props.champ.even == null ? [] : this.props.champ.even
        break;
      default:
        matchupList = [];
    }

    this.state = {
      matchupList: matchupList,
      displayCount: 3
    };

    this.showMore = this.showMore.bind(this);
    this.displayMatchUpItems = this.displayMatchUpItems.bind(this);
  }

  componentWillMount() {

  }

  showMore() {
    this.setState({
      displayCount: 8
    })
  }

  displayMatchUpItems = () => {
    var displayItems = []
    var realCount = 0;
    for (var index = 0; index < this.state.matchupList.length; index++) {
      let matchupItem = this.state.matchupList[index];      
      if (matchupItem != null && (this.props.activeType == 0 || this.props.activeType == matchupItem.matchType)) {
        displayItems.push(<MatchUpItem key={index} champName={this.props.champ.name} matchID={matchupItem.matchID} matchupType={matchupItem.matchType} upVote={matchupItem.upVote} downVote={matchupItem.downVote} />)
        realCount++;
      }    
if ( this.state.matchupList != null) {

}

      if (realCount >= this.state.displayCount)
        break;
    }
    return displayItems;
  }

  render() {
    return (
      <div className="container">
        <div className="col">
          <div className="container">
            <div className="row">
              <h5>{this.props.champ.name} {statusStringList[this.props.statusType]}</h5>
            </div>
          </div>
          <div class="cs-matchups-list">
            {this.displayMatchUpItems()}
          </div>
          
              <div class="cs-champion-view-all">
                <button class="btn btn-secondary btn-sm btn-block" onClick={this.showMore}>View more</button>
              </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    champ: state.champs.champ,
  }
}
export default connect(mapStateToProps, null)(ChampionMatchUpList);