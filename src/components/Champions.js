import React, { Component } from 'react';
import { ChampsRef, timeRef } from './reference';
import { getsinglechamp } from '../actions/champs';
import { connect } from 'react-redux'; // this is not being used.  oh isee so like this? 
import { Redirect,Link } from 'react-router-dom';
import {Upvote} from 'react-upvote';
import Form from './Form';
import { Icon } from 'react-icons-kit';
import Specials from './specials';
import app from "../config/dev";
import {chevronDown} from 'react-icons-kit/fa/chevronDown';
import {chevronUp} from 'react-icons-kit/fa/chevronUp';
class OneChamp extends Component {

  state={
    name: "",
    weak:[],
    img: "",
    authenticated:false,
      currentUser: null,
      
        email: '',
  }

componentDidMount() {

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
      const {dispatch, match} = this.props;
      dispatch(getsinglechamp(match.params.id));
      console.log('this is from champ: ', this.props);
  }

  render(){
    console.log('from champ ids',this.props.champ.id);
    const {dispatch, loading} = this.props;

     const authenticated = this.state.authenticated;
    console.log('change',this.props);
    console.log('c',this.props.champ.img);
    console.log('', this.props.champ.stats);
const champ = this.props.champ.stats;
    let content = null;
    if (loading) {
      content = (<p>Loading...</p>)
    } else {
      content = (
      <div id="f">
              <div className="ChampionHeader_row_ArTlM">
              <div style={{paddingRight: '0.75rem', paddingLeft: '0.75rem', flexGrow: 1}}>
              <div style={{display: 'flex', marginBottom: '1.5rem'}}>
              <div style={{flexShrink: 0, marginRight: '1rem'}}>
              <div className="IconChampion_component_2qg6y IconChampion_lg_2QLBf">
        
          <img className="v-lazy-image v-lazy-image-loaded IconChampion_img_3U2qE" src={this.props.champ.img} height="80px"/>  
                
      </div></div></div></div></div> 


  <div className="timeline-panel">
                  <div className="timeline-heading"> <h4>{this.props.champ.name}</h4>
                  </div>

    
    <ul>
{Object.keys(this.props.champ.stats).map((item, i) => (

    <div className="card">
    <li className="travelcompany-input" key={i}>
        <div> {champ[item]}</div>
    </li>
</div>

))}
      
          

         
   </ul>
      <div id="line"></div>
   <br></br>

 <div className="w3-container">

<Specials id={this.props.match.params.id}/>


  {authenticated ? ( 

          <div className="row"><div className="col-lg-6">
          <div className="cs-champion-view-all">
          <Form id={this.props.champ.id}/>
            </div>    </div>   </div>
                ) : (
          <div className="col-lg-6">&#160;&#160;&#160;&#160;
             <Link to="/login" className="nav-link2"> Login  to post</Link> 

                   
            </div>

         )}

         <div id="line"> </div>
        <h2>Weak To</h2> <br></br>
        <ul className="w3-ul w3-card-4">
          <li className="w3-bar">
            
            <img src={this.props.champ.img2} className="w3-bar-item w3-circle w3-hide-small" style={{width: 145}} />
            <div className="w3-bar-item">
                  <span id="item"> Mid </span>
<div className="col-sm-5">
   

        <span className="label label-primary">{this.props.champ.win}</span>


            </div>
            </div>
          </li>

<li className="w3-bar">
           
            <img src={this.props.champ.img3} className="w3-bar-item w3-circle w3-hide-small" style={{width:145}} />
            <div className="w3-bar-item">
             
 {/* <Link to={`/Matchup/${this.props.champ.id}`} > <span className="w3-large">{this.props.champ.weak3}</span><br /> </Link> */}

 <Link to={`/matchup`} > <span className="w3-large">{this.props.champ.weak3}</span><br /> </Link>

              <span id="item"> Mid </span>

        <span className="label label-primary">{this.props.champ.win}</span>
            </div>
          </li>
  
        </ul>
      </div>
</div>
 <div>


</div>


</div>

      );
    }

  
    return(
      <div> 
      { content }


</div>


 

    );
  }
}

const mapStateToProps = (state) => {
  console.log('champs',state.champs);
  console.log(state.loading);
  return{
    champ: state.champs.champ, 
    loading: state.loading
  }
}

export default connect(mapStateToProps, null)(OneChamp)