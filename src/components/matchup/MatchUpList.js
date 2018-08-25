import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpItem from '../common/MatchUpItem';
import { ChampsRef } from '../reference';

class MatchUpList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matchUpList: [],
    }

    this.getMatchUpList = this.getMatchUpList.bind(this);
  }
  componentWillReceiveProps(nextProps) {        
    this.getMatchUpList(nextProps)
  }

  componentDidMount() {    
    this.getMatchUpList(this.props)
  }

  getMatchUpList(props){
    let currentComponent = this;    

    ChampsRef.child(`${props.champ.id}/matchup/${props.matchchamp.id}`).on("value", function(snapshot){       
      currentComponent.setState({
        matchUpList: snapshot.val()
      });
    });
  }

  render() {    
    return (
      <div className="container">
        <div className="col">
          <div className="container">
            <div className="row">
              <h5>{this.props.champ.name} is weak against</h5>
            </div>
          </div>
          <div class="cs-matchups-list">                    
            {this.state.matchUpList != null ?
              this.state.matchUpList.map((matchup, index)=> (              
              <MatchUpItem key={index} champName={this.props.champ.name} matchID={this.props.matchchamp.id} matchupType={matchup.matchType} upVote={matchup.upVote} downVote={matchup.downVote} />               
            )) : null}            
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

export default connect(mapStateToProps, null)(MatchUpList);