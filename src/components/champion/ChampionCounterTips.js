import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterTip from '../common/CounterTip';
import { CounterTipsRef, timeRef } from '../reference';
import app from "../../config/dev";
import { Link } from 'react-router-dom';

class ChampionCounterTips extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      newTip: "",
      isNewCounterTip: false,
      tipList: [],
      loading: true,
      authenticated: false
    };

    this.handleNewCounterTip = this.handleNewCounterTip.bind(this);
    this.handleSubmitCounterTip = this.handleSubmitCounterTip.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleNewTipChange = this.handleNewTipChange.bind(this);
    this.getCounterTips = this.getCounterTips.bind(this);    
  }

  componentWillReceiveProps(nextProps) {
    this.getCounterTips(nextProps)
  }

  componentWillMount() {
    this.getCounterTips(this.props)
  }

  getCounterTips() {
    //Get CounterTipList
    const champ_id = this.props.champ.id;
    CounterTipsRef.orderByChild('parent_id').equalTo(`${champ_id}`).on('value', (snap) => {      
      let tipList = []
      snap.forEach(child => {
        tipList.push({ ...child.val(), key: child.key });
      });
      this.setState({ tipList: tipList, loading: false });
    });

    //Check Login
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentUser: user,
          email: user.email,
          authenticated: true
        })
      } else {
        this.setState({
          currentUser: null,
          authenticated: false
        })
      }
    });

  }

  handleNewCounterTip() {
    this.setState({
      isNewCounterTip: true
    });
  }

  handleSubmitCounterTip(event) {
    event.preventDefault();
    if (this.state.newTip.length) {

      //Submit CounterTip to firebase
      let id = CounterTipsRef.push().key;
      let newCounterTip = {
        id: id,
        vote: 0,
        parent_id: this.props.champ.id,
        text: this.state.newTip,
        timestamp: timeRef,
        user_id: app.auth().currentUser.uid  
      };
      CounterTipsRef.push(newCounterTip);

      //Add CounterTip to Local TipList
      let tipList = this.state.tipList;
      tipList.push(newCounterTip);
      this.setState({
        isNewCounterTip: false,
        newTip: "",
        tipList: tipList
      });
    }
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
    const { tipList, loading, authenticated } = this.state;

    let counterTips;
    if (loading) {
      counterTips = <div className="TaskList-empty">Loading...</div>;
    } else {
      counterTips = (
        <div>
          {tipList.length == 0 && authenticated ? <div class="cs-counter-tips-list"><div class="alert alert-warning">Be the first to submit a counter tip!</div></div> : ""}
          <div className="row" class="cs-counter-tips-list">
            {tipList.map((tip, index) =>
              index < 3 ? <CounterTip counterTip={tip} /> : null
            )}
            {counterTips}
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="col">
          <div className="container">
            <div className="row">
              <h5>Counter Tips</h5>
            </div>
          </div>
          {counterTips}
          <div class="cs-champion-view-all">

            {authenticated ?
              (this.state.isNewCounterTip ? (
                <form>
                  <fieldset class="form-group">
                    <textarea class="form-control" rows="3" value={this.state.newTip} onChange={this.handleNewTipChange}></textarea>
                  </fieldset>

                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <button class="btn btn-primary btn-sm" type="submit" onClick={this.handleSubmitCounterTip}>Submit</button>
                    </li>
                    <li class="list-inline-item">
                      <button class="btn btn-secondary btn-sm" type="button" onClick={this.handleCancelSubmit}>Cancel</button>
                    </li>
                  </ul>
                </form>
              ) : (
                  <button class="btn btn-primary btn-sm btn-block" type="button" onClick={this.handleNewCounterTip}>Submit a new counter tip</button>
                ))
              : null
            }
            {this.state.tipList.length > 3 ? <Link class="btn btn-secondary btn-sm btn-block" to={`/champions/${this.props.champ.name}/countertips`}>View more</Link> : null}
          </div>
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
export default connect(mapStateToProps, null)(ChampionCounterTips);