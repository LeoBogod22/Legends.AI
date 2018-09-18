import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar';
import UserAvatar from '../common/UserAvatar';

class ChampionTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <div className="container" >


       <ul>
{Object.keys(this.props.champ.stats).map((item, i) => (

    <div className="card">
    <li className="travelcompany-input" key={i}>
        <div> {this.props.champ.stats[item]}</div>
    </li>
</div>

))}
</ul>
        <div class="cs-champion-header row" style={{ justifyContent: 'center', }}>
          <div class="col-xs-12">
            <UserAvatar isYou={false} championID={this.props.champ.id} championName={this.props.champ.name} imgAvatar={this.props.champ.img} />
          </div>
          <SearchBar isMatchup={false} isMatchChampion={true} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    champ: state.champs.champ
  }
}

export default connect(mapStateToProps, null)(ChampionTitle);