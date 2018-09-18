import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar';
import UserAvatar from '../common/UserAvatar';
import {MatchupSearchDiv} from '../../utils/style'
import { Link } from 'react-router-dom';
import * as actions from '../../actions/champs';

class MatchUpTitle extends Component {
  render() {
    return (
      <div className="container" >
        <div class="cs-matchup-header row">
          <div class="cs-matchup-versus">            
            <Link class="cs-matchup-exchange btn btn-primary btn-sm" to={`/matchup/${this.props.matchchamp.name}/${this.props.champ.name}`} onClick={() => this.props.exchangeMatchChamp()} >
              <i class="fa fa-fw fa-exchange"> </i>                          
            </Link>
          </div>
          <div class="col-xs-6 col-sm-5 col-sm-offset-1 col-lg-5 col-lg-offset-1">
            <MatchupSearchDiv>
              <div class="col-sm-6 hidden-xs-down">
                <SearchBar isMatchup={true} isMatchChampion={false}/>

                 <span>win rate: {this.props.matchchamp.lanewin}</span>
              </div>
              <div class="col-sm-6">               
                <UserAvatar isYou={true} championID={this.props.champ.id} championName={this.props.champ.name} imgAvatar={this.props.champ.img}/>
              </div>
            </MatchupSearchDiv>
          </div>
          <div class="col-xs-6 col-sm-5 col-lg-5">            
            <MatchupSearchDiv>
              <div class="col-sm-6">
                <UserAvatar isYou={false} championID={this.props.matchchamp.id} championName={this.props.matchchamp.name} imgAvatar={this.props.matchchamp.img}/>
              </div>
              <div class="col-sm-6 hidden-xs-down">
                <SearchBar isMatchup={true} isMatchChampion={true}/>
              </div>
            </MatchupSearchDiv>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    champ: state.champs.champ,
    matchchamp : state.champs.matchchamp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    exchangeMatchChamp: () => { window.location.reload(); dispatch(actions.exchangeMatchChamp()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchUpTitle);