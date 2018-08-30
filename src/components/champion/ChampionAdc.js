import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchUpItem from '../common/MatchUpItem';

class ChampionAdc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchupLists: []
    };

    this.showMore = this.showMore.bind(this);
  }

  componentWillMount() {
   



      if (this.props.champ.strong != null)
      this.setState({ matchupLists: this.props.champ.strong.slice(-3)});
  }

  showMore() {
    this.setState({
      matchupLists: this.props.champ.strong.slice(-8)
    })
  }

  render() {
    console.log('ff', this.props.champ.weakjngl);
    return (
      <div className="container">
        <div className="col">
          <div className="container">
            <div className="row">
              <h5>{this.props.champ.name} {this.props.status}</h5>
            </div>
          </div>
          <div class="cs-matchups-list">
          {this.props.champ.weakadc != null ?
              this.state.matchupLists.map((weakChamp2, index) =>
                (weakChamp2 != null ?
                  <MatchUpItem key={index} champName={this.props.champ.name} matchID={weakChamp2.matchID} matchupType={weakChamp2.matchType} upVote={weakChamp2.upVote} downVote={weakChamp2.downVote} />
                  : null)              
            ): null}
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
export default connect(mapStateToProps, null)(ChampionAdc);