import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChampsRef } from "../reference";
import { connect } from 'react-redux'
import * as actions from '../../actions/champs';
import { Link } from 'react-router-dom';
import app from "../../config/dev";

const propTypes = {
  matchID: PropTypes.number,
  matchupType: PropTypes.number,
  upVote: PropTypes.number,
  downVote: PropTypes.number
};

const defaultProps = {
  matchID: 0,
  matchupType: 0,
  upVote: 0,
  downVote: 0
};

class MatchUpItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchUpChamp: {},
    }

    this.displayMatchUpType = this.displayMatchUpType.bind(this);
    this.getMatchUpChamp = this.getMatchUpChamp.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.getMatchUpChamp(nextProps);
  }
  
  componentDidMount() {
    this.getMatchUpChamp(this.props);
  }

  getMatchUpChamp(props){
    let currentComponent = this;

    ChampsRef.child(props.matchID).on("value", function (snapshot) {
      currentComponent.setState({
        matchUpChamp: snapshot.val()
      });
    });
  }

  downvotePost(key, vote) {
    vote--;
    ChampsRef.child(key).update({ 'vote': vote });    
  }

  upvotePost(key, vote) {
    vote++;
    ChampsRef.child(key).update({ 'vote': vote });    
  }
displayMatchUpType = () => {
    switch (this.props.matchupType) {
      case 1:
        return <span class="label cs-bg-general" >General</span>;
      case 2:
        return <span class="label cs-bg-top">Top</span>;        
      case 3:
        return <span class="label cs-bg-middle">Middle</span>;        
      case 4:
        return <span class="label cs-bg-bottom">Bottom</span>;        
      case 5:
        return <span class="label cs-bg-jungle">Jungle</span>;
      default:
        return <span class="label cs-bg-general" >General</span>;
    }
  }

  render() {
    return (
      // <Link to={`/champions/${champ.name}`} onClick={() => this.props.selectChampion(champ.id)} >

      <div class="cs-matchup-item media">
        <Link class="media-left" to={`/matchup/${this.props.champName}/${this.state.matchUpChamp.name}`} onClick={() => this.props.selectMatchUpChampion(this.state.matchUpChamp.id)} >
          <div class="cs-thumbnail-container media-object">
            <img class="cs-thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" style={{ backgroundImage: 'url(' + this.state.matchUpChamp.img + ')' }} />
          </div>
        </Link>
        <div class="media-body">
          <Link to={`/matchup/${this.props.champName}/${this.state.matchUpChamp.name}`} onClick={() => this.props.selectMatchUpChampion(this.state.matchUpChamp.id)} >
            <h5 class="cs-matchup-item-name media-heading">{this.state.matchUpChamp.name}</h5>
          </Link>
          <div class="m-t-0">
              {this.displayMatchUpType()}
            <ul class="cs-matchup-item-score list-unstyled list-inline">
              <li class="list-inline-item">
                <span class="label label-success cs-matchup-item-votes-non-active">
                  <i class="fa fa-fw fa-caret-up"></i>
                  <span>{this.props.upVote}</span>
                </span>
              </li>
              <li class="list-inline-item">
                <span class="label label-danger cs-matchup-item-votes-non-active">
                  <i class="fa fa-fw fa-caret-down"></i>
                  <span>{this.props.downVote}</span>

                  
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

MatchUpItem.propTypes = propTypes;
MatchUpItem.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch) => {
  return {
    selectMatchUpChampion: (id) => { dispatch(actions.getmatchchamp(id)) }
  };
};

export default connect(null, mapDispatchToProps)(MatchUpItem);