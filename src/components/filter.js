import React, { Component } from 'react'
import axios from 'axios'
import { ChampsRef, timeRef } from './reference';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
class Filters extends Component {
    state = {
        persons: [],
        name:"",
           champs: [], 
            Champsloading: true
          
        
    }

    constructor() {
    super();
    this.state = {isChecked: false};
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
  }


   
   handleChecked ()  { 

this.setState({isChecked: true});

console.log('fafaf')
 ChampsRef.orderByChild('ban').on('value',  (snap) => {
      const tasks = [];
      let champs = [];

      snap.forEach(shot => {
       champs.push({ ...shot.val(), key: shot.key });
      });

      console.log(champs);
      this.setState({ champs: champs, ChampsLoading: false });
    });
 



    
       
        

          
    }

    render() {



      const { champs, ChampsLoading } = this.state;
    const orderedchamps = champs;


     let champList;
  console.log(champs);
  console.log(champList);

      if (ChampsLoading) {
        champList = <div className="TaskList-empty">Loading...</div>; 

    } 

if (this.state.isChecked){
      
      champList = (
            <ul className="TaskList">
            
              {champs.map(champ => (


    
     
             <div className="popular_item">
                <div className="popular_item_price"><Link to={`/champions/${champ.id}`} >  {champ.name}  </Link></div>
        <Link to={`/champions/${champ.id}`} > 
         <img src={champ.img} height="92" /> </Link>
          <div className="popular_item_content">
         
       
          </div>

          </div>
   
          
  ))}




  </ul>

   );
      }

    

    
        return (


  <div className="popular">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title text-center">
                <h2>Popular Ch in 2018</h2>
                <div>take a look at these offers</div>
 

              </div>
              <br></br><br></br>
            </div>
          </div>
        </div>


                {this.state.isChecked ? ( 
              {champList}
 ) : (

 <div> Filter </div> 
    )}
            }
 <div className="card" style={{marginBottom: '1.5rem'}}><div style={{marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)', textTransform: 'uppercase', lineHeight: 1}}>
          Filters
        </div><div className="field"><label className="checkbox"  onChange={this.handleChecked}  style={{lineHeight: 1, fontWeight: 'bold', textTransform: 'uppercase'}}><input type="checkbox" style={{marginRight: '0.125rem'}} />
            Ban
          </label></div><div style={{marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)', textTransform: 'uppercase', lineHeight: 1}}>
          Sort By
        </div><div className="control" style={{lineHeight: 1, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.75rem'}}><label className="radio" style={{marginRight: '0.5rem'}}><input type="radio" name="orderByField" defaultValue="name" style={{marginRight: '0.125rem'}} />
            Ban
          </label><label className="radio"><input type="radio" name="orderByField"  onChange={this.handleChecked} defaultValue="pickRate" style={{marginRight: '0.125rem'}} />
            <br></br>
            Pick Rate
          </label></div></div>
              </div>



              );
    }



}

function mapStateToProps(state, props){
  return{
    champ: state.champ,
    

  }
}

export default Filters;