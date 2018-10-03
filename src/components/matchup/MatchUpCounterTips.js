import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterTip from '../common/CounterTip';
import { ChampsRef, CounterTipsRef, timeRef } from '../reference';
import app from "../../config/dev";
import { Link } from 'react-router-dom';
import { UserRef } from '../reference';
class MatchUpCounterTips extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial State
    this.state = {
      newTip: "",
      isNewCounterTip: false,
      tipList: [],
      loading: true,
      authenticated: false,
      parentID:"",
      elo: ""
    };

    this.handleNewCounterTip = this.handleNewCounterTip.bind(this);
    this.handleSubmitCounterTip = this.handleSubmitCounterTip.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleNewTipChange = this.handleNewTipChange.bind(this);

  }

  

  componentDidMount(){

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

  componentWillMount(){
    //Get CounterTipList        
    let champ_id= this.props.matchchamp.id;

  CounterTipsRef.orderByChild('matchup_id').equalTo(`${champ_id}`).on('value', (snap) => {           
      let tipList = []
      
      snap.forEach(child => {
        tipList.push({ ...child.val(), key: child.key });
      });


      this.setState({ tipList: tipList, Loading: false}); 
  console.log(tipList);

    });

  app.auth().onAuthStateChanged((user) => {

        //this was the variable u were using and is undefined
      //this.props.location.state.car.id
        //alert("car has been saved!")


            if (user) {
        this.setState({email:user.email})
      
        const user_ID=  user.uid;
            
        
      UserRef.child(`${user_ID}`).once('value', (snapshot) => {

 snapshot.forEach(shot => {

 var childData = shot.val();
 this.setState({elo: childData})

 console.log(childData);

 });

 });
 
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
    alert('f');
        let champ_id= this.props.matchchamp.id;
 
   let id = CounterTipsRef.push().key;  
        const NewComment= {
            id: id,
            rank: this.state.elo,
            vote: 0,
            matchup_id: this.props.matchchamp.id, 
             text: this.state.newTip,
              timestamp: timeRef,
               user_email: app.auth().currentUser.email 
    }

     if (NewComment.text.length) {
       CounterTipsRef.push(NewComment);
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
    const { tipList,ChampsLoading, authenticated } = this.state;
 console.log(tipList);  
    let counterTips;
    if (ChampsLoading) {
      counterTips = <div className="TaskList-empty">Loading...</div>;
    } else {
      counterTips = (
          <div>
          {tipList.length == 0 && authenticated  ? <div class="cs-counter-tips-list"><div class="alert alert-warning">Be the first to submit a counter tip!</div></div> : ""}
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
                  <button class="btn btn-primary btn-sm btn-block" type="button" onClick={this.handleNewCounterTip}>Submit a new counter tip!</button>
                ))
              : <Link to="/login"> <p> Login to submit a counter Tip </p> </Link>
            }
            {this.state.tipList.length > 3 ? <Link class="btn btn-secondary btn-sm btn-block" to={`/matchup/${this.props.champ.name}/${this.props.matchchamp.name}/countertips`}>View more</Link> : null}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    champ: state.champs.champ,
    matchchamp: state.champs.matchchamp
  }
}

export default connect(mapStateToProps, null)(MatchUpCounterTips);