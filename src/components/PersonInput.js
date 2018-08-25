import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';


import { ChampsRef, timeRef } from './reference';
class PersonInput extends Component {
  state = {
 name: "",
  id: "",
 img: ""

 

  }


    handleChange = event => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();



let champid = ChampsRef.push().key;
        const NewChamp= {
          id: champid,
          name: this.state.name,
          img: this.state.img,
            timestamp: timeRef
          };



  if (NewChamp.name.length) {
     ChampsRef.child(champid).set(NewChamp);

   


}


  };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                 champ  Name:
                     <input type="select" name="select" id="name"
                      value={this.state.name}
                      onChange={(e) => this.setState({name: e.target.value})}
                      >

                         </input>
                </label>
    <label>
                 link
                <input type="select" name="img" id="make"
                      value={this.state.img}
                      onChange={(e) => this.setState({img: e.target.value})}
                      >

                      </input>

                          </label>
                <button type="submit">search</button>
            </form>
        )
    }
}

function mapStateToProps(state, props){
  return{
    champ: state.champ,
    messages: state.messages

  }
}

export default connect(mapStateToProps)(PersonInput)