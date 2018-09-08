import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../../actions/champs';
import { Link } from 'react-router-dom';

const propTypes = {
  isYou: PropTypes.bool,
  championName: ""
};

const defaultProps = {
  isYou: true
};



class UserAvatar extends Component {
selectChampion() {
alert('f');
}
  render() {
    return (
      <div>
        <div class="cs-champion-profile">          
          <Link to={`/champions/${this.props.championName}`} onClick={() => this.selectChampion(this.props.championID)} >
            <div class="cs-champion-profile-icon" style={{ backgroundImage: 'url(' + this.props.imgAvatar + ')' }}>
            </div>
          </Link>
          <span class="cs-champion-profile-name">
            {this.props.isYou ? <span class="cs-matchup-tag label label-primary">You</span> : ""}
            {this.props.championName}
          </span>
        </div>

      </div>
    );
  }
}

UserAvatar.propTypes = propTypes;
UserAvatar.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch) => {
  return {
    selectChampion: (id) => { dispatch(actions.getsinglechamp(id)) }
  };
};

export default connect(null, mapDispatchToProps)(UserAvatar);