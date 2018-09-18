import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { CounterTipsRef } from '../reference';
import app from "../../config/dev";
import { Route, withRouter } from "react-router";
import { UserRef } from '../reference';
import { Redirect, Link } from 'react-router-dom';
const defaultProps = {
  counterTip: {}
};

class CounterTip extends Component {
   constructor(props) {
    super(props);

    // Set initial State
    this.state = {
      newTip: "",
      isNewCounterTip: false,
      tipList: [],
      loading: true,
      email : '',
      authenticated: false,
      user_id : '',
      elo: ''
    };
  }



componentDidMount(){

    //Check Login
  
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
            currentUser: user,
      
user_id: user.uid,


          email: user.email,
          authenticated: true
        })
      } else {
        this.setState({
           user_id: null,
          authenticated: false
        })
      }
    
    });

 app.auth().onAuthStateChanged((user) => {

        //this was the variable u were using and is undefined
      //this.props.location.state.car.id
        //alert("car has been saved!")
        this.setState({email:user.email})
      
        const user_ID=  user.uid;
            
        
      UserRef.child(`${user_ID}`).once('value', (snapshot) => {

 snapshot.forEach(shot => {

 var childData = shot.val();
 this.setState({elo: childData})
if(this.state.elo=="Bronze"){
  console.log("true");
}
else{
  console.log('cra');
}

 });

 });
 

  });
  }


  
   downvotePost(key, vote, user_id) {


if (this.state.user_id !=null )
{

CounterTipsRef.child(`${key}/votes/${this.state.user_id}`).once("value",snapshot => {
if (snapshot.exists()){
const userData = snapshot.val();
console.log("exists!", userData);
}
else{

  let user_id2= this.state.user_id;

let votes = { [user_id2]: true};

vote--;
CounterTipsRef.child(key).update({ 'vote': vote, 'votes': votes }); 
}

});
}




if (this.state.user_id==null) {

this.props.history.push('/login');
}


}
 upvotePost(key, vote, user_id) {

if (this.state.user_id !=null )
{

CounterTipsRef.child(`${key}/votes/${this.state.user_id}`).once("value",snapshot => {
if (snapshot.exists()){
const userData = snapshot.val();
console.log("exists!", userData);
}
else{

  let user_id2= this.state.user_id;

let votes = { [user_id2]: true};

vote++;
CounterTipsRef.child(key).update({ 'vote': vote, 'votes': votes }); 
}

});
}




if (this.state.user_id==null) {

this.props.history.push('/login');
}


}
displayImage = () => {
    switch (this.state.elo) {
      case "Bronze":
  
        return <img src="https://ih0.redbubble.net/image.160793272.8306/ap,550x550,12x12,1,transparent,t.png" id='img'/>;
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
    const { counterTip } = this.props

    return (
      <div>

        <div class="cs-counter-tip">
          <div class="cs-counter-tip-score-alt">
            <div class="cs-counter-tip-vote-alt cs-counter-tip-upvote-alt">
              <i class="fa fa-fw fa-caret-up cs-counter-tip-caret cs-counter-tip-caret-non-active cs-counter-tip-vote-alt cs-counter-tip-vote-non-active-alt"
                disabled={!this.state.email} onClick={()=> this.upvotePost(counterTip.key, counterTip.vote, this.state.user_id)}></i>
            </div>
            <p class="cs-counter-tip-total-alt jq-counter-tip-57b4f5b5aabedb001bdcd5f3">{counterTip.vote}</p>
            <div class="cs-counter-tip-vote-alt cs-counter-tip-downvote-alt">
              <i class="fa fa-fw fa-caret-down cs-counter-tip-caret cs-counter-tip-caret-non-active cs-counter-tip-vote-alt cs-counter-tip-vote-non-active-alt"
                onClick={()=> this.downvotePost(counterTip.key, counterTip.vote, this.state.user_id)}></i>
            </div>
          </div>
          <div class="cs-counter-tip-content">
            <div>
              <p class="cs-counter-tip-text">{counterTip.text}</p>
              <div class="cs-counter-tip-footer clearfix">
                <p class="cs-comment-metadata">by <span class="text-primary">User</span></p>
           {this.displayImage()}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

CounterTip.defaultProps = defaultProps;

export default CounterTip;

