import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChampsRef, timeRef } from './reference';
import { getsinglechamp } from '../actions/champs';
import { Redirect,Link } from 'react-router-dom';



import { Container, Row, Col } from 'reactstrap';
import { Upvote } from 'react-upvote';
import { Icon } from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';

class MatchUp extends Component {

  render() {
    const {champ} = this.props;
    console.log('wwwwwwwww')
    console.log(champ);
    return (
      <div id="f">
        <div className="ChampionHeader_row_ArTlM">
          <div style={{paddingRight: '0.75rem', paddingLeft: '0.75rem', flexGrow: 1}}>
            <div style={{display: 'flex', marginBottom: '1.5rem'}}>
            <div style={{flexShrink: 0, marginRight: '1rem'}}>
                <div className="IconChampion_component_2qg6y IconChampion_lg_2QLBf">
                <img className="v-lazy-image v-lazy-image-loaded IconChampion_img_3U2qE" src={this.props.champ.img} height="80px"/>          
                </div>
            </div>
            </div>
          </div>
        </div>

        <div className="timeline-panel">
            <div className="timeline-heading"> <h4>{this.props.champ.name}</h4>
        </div>

        <ul>
            {
              Object.keys(champ.stats).map((item, i) => (
                  <div className="card">
                      <li className="travelcompany-input" key={i}>
                          <div> {champ.stats[item]}</div>
                      </li>
                  </div>
              ))
            }  
        </ul>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return  {
    champ: state.champs.champ, 
    loading: state.loading
  }
}

export default connect(mapStateToProps, null)(MatchUp)