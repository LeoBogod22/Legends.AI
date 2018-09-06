import React, { Component } from 'react'
import axios from 'axios'
import { ChampsRef, timeRef } from './reference';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as actions from '../actions/champs';
import Filters from './filter';
class PersonList extends Component {
  state = {
    persons: [],
    name: "",
    champs: [],
    Champsloading: true,

value: "d"
  }




constructor() {
    super();
   
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
    
  }
   

  handleChecked (event)  {

      this.setState({
      value: event.target.value
    })


let option = event.target.value;

alert(option);
    ChampsRef.orderByChild(`${option}`).on('value',  (snap) => {
      const tasks = [];
      let champs = [];
      snap.forEach(shot => {
        champs.push({ ...shot.val(), key: shot.key });
      });
     let foo = champs.reverse;
      this.setState({ champs: champs, ChampsLoading: false });
    });
  }
  componentWillMount() {

    ChampsRef.on('value', snap => {
      const tasks = [];
      let champs = []
      snap.forEach(shot => {
        champs.push({ ...shot.val(), key: shot.key });
        champs.reverse;
      });

      this.setState({ champs: champs, ChampsLoading: false });
    });









  }

  render() {


    const { champs, ChampsLoading } = this.state;
    const orderedchamps = champs.reverse;


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

          {champs.reverse().map(champ => (



            <div className="popular_item">
              <div className="popular_item_price"><Link to={`/champions/${champ.name}`} onClick={() => this.props.selectChampion(champ.id)}>  {champ.name}  </Link></div>

              <Link to={`/champions/${champ.name}`} onClick={() => this.props.selectChampion(champ.id)} >
                <img src={champ.img} height="92" /> </Link>
              <div className="popular_item_content">


              </div>

            </div>


          ))}




        </ul>

      );
    }
    return (
  <div className='zipcodeInput'>
    <form method='POST' action='/search-champ'>
       <input type='text' placeholder='Enter zipcode..' name='name'/>
       <button>ENTER</button>
    </form>
       

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
        {champList}
        
      
   <div className="card" style={{marginBottom: '1.5rem'}}>
          <div style={{marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)', textTransform: 'uppercase', lineHeight: 1}}>
          <h1>   Filters </h1>
          </div>
          <div className="field">
            <label className="radio"   style={{lineHeight: 1, fontWeight: 'bold', textTransform: 'uppercase'}}>
              <input type="radio" value="ban"    onChange={e => this.handleChecked(e)}  style={{marginRight: '0.125rem'}} />
              <p> Sort By Bans </p>
            </label>
          </div>
         
          <div className="control"  style={{lineHeight: 1, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.75rem'}}>
            <label className="radio"   style={{marginRight: '0.5rem'}}><input type="radio" name="orderByField" defaultValue="name" style={{marginRight: '0.125rem'}} />
               <input type="radio" value="dif"  onChange={e => this.handleChecked(e)}   style={{marginRight: '0.125rem'}} />
              Difficulty 
            </label>
            <label className="radio">
              <input type="radio" value='win_rate' name="orderByField" 
            onChange={e => this.handleChecked(e)}  defaultValue="pickRate" style={{marginRight: '0.125rem'}} />
              <br></br>
              Win Rate
            </label>

                 {this.state.result}
          </div>
        </div>

      </div>
 </div>
  

    );
  }



}

function mapStateToProps(state, props) {
  return {
    champ: state.champ,


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectChampion: (id) => { dispatch(actions.getsinglechamp(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);