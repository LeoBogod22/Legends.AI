import React, { Component } from 'react';
import { connect } from 'react-redux';


import Specials from './specials';
import { CardImg, Button, Row, Col, Table } from 'reactstrap';

import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';

import { Link } from 'react-router-dom';
import { ChampsRef, timeRef } from './reference';

import Form from './Form';
import app from "../config/dev";
class Searchresults extends Component {
  // ...



  state = {
        persons: [],
        name:"",
           champs: [], 
            Champsloading: true,
          authenticated:false,
      currentUser: null,
      
        email: ''

        
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



 orderbyBan() { 
 
 
  let name = this.props.match.params.name;
  console.log(JSON.stringify(this.props.match.params.name));
 ChampsRef.orderByChild('ban').on('value',  (snap) => {
 let champs = []
      snap.forEach(shot => {
       champs.push({ ...shot.val(), key: shot.key });
      });
      this.setState({ champs: champs, ChampsLoading: false });

       });

     }
  render() {
   
      const { champs, ChampsLoading } = this.state;
    const orderedchamps = champs;


     const authenticated = this.state.authenticated;
     let champList;
  console.log(champs);
  console.log(champList);

      if (ChampsLoading) {
        champList = <div className="TaskList-empty">Loading...</div>; 
        
    } 


      else if
       (champs.length) {


      champList = (
            <ul className="TaskList">
            
              {champs.map(champ => (


       <div id="f">
       <h1> djdfdfdf </h1><div className="row">
              <div style={{paddingRight: '0.75rem', paddingLeft: '0.75rem', flexGrow: 1}}>
              <div style={{display: 'flex', marginBottom: '1.5rem'}}>
              <div style={{flexShrink: 0, marginRight: '1rem'}}>
              <div className="IconChampion_component_2qg6y IconChampion_lg_2QLBf">
        
          <img className="v-lazy-image v-lazy-image-loaded IconChampion_img_3U2qE" src={champ.img} height="80px"/>  
                
      </div></div></div></div></div> 


  <div className="timeline-panel">
                  <div className="timeline-heading"> <h4>{champ.name}</h4>
                  </div>
    
    <ul>
{Object.keys(champ.stats).map((item, i) => (

    <div className="card">
    <li className="travelcompany-input" key={i}>
        <div> {champ.stats[item]}</div>
    </li>
</div>

))}
      
          

         </ul>


          <div id="line"></div>
   <br></br>

 <div className="w3-container">


<Specials id={champ.id}/>

  {authenticated ? ( 

          <div className="row">
          <div className="col-lg-6">
          <div className="cs-champion-view-all">
          <Form id={champ.id}/>
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
            
            <img src={champ.img2} className="w3-bar-item w3-circle w3-hide-small" style={{width: 145}} />
            <div className="w3-bar-item">
              <span className="w3-large">{champ.weak}</span><br />
                  <span id="item"> Mid </span>
<div className="col-sm-5">
   

        <span className="label label-primary">{champ.win}</span>


            </div>
            </div>
          </li>

<li className="w3-bar">
           
            <img src={champ.img3} className="w3-bar-item w3-circle w3-hide-small" style={{width:145}} />
            <div className="w3-bar-item">
             
 <Link to={`/Matchup/${champ.id}`} > <span className="w3-large">{champ.weak3}</span><br /> </Link>

        <span className="label label-primary">{champ.win}</span>
            </div>
          </li>
  
        </ul>
     </div></div>
 <div>


</div></div>
))}
  </ul>

   );
      }
        return (
        <div>


                f
              {champList}


      <div className="card" style={{marginBottom: '1.5rem'}}><div style={{marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)', textTransform: 'uppercase', lineHeight: 1}}>
          Filters
        </div><div className="field"><label className="checkbox" style={{lineHeight: 1, fontWeight: 'bold', textTransform: 'uppercase'}}><input type="checkbox" style={{marginRight: '0.125rem'}} />
            Free To Play
          </label></div><div style={{marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)', textTransform: 'uppercase', lineHeight: 1}}>
          Sort By
        </div><div className="control" style={{lineHeight: 1, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.75rem'}}><label className="radio" style={{marginRight: '0.5rem'}}><input type="radio" name="orderByField" defaultValue="name" style={{marginRight: '0.125rem'}} />
            Name
          </label><label className="radio"><input type="radio" name="orderByField" defaultValue="pickRate" style={{marginRight: '0.125rem'}} />
            Pick Rate
          </label></div></div>
              
              </div>
    );
  }
}


export default Searchresults;