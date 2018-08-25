import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { getsinglechamp } from '../actions/champs';

import { ChampsRef, CommentsRef, timeRef } from './reference';
 class Form extends Component {
  state = {
 text: "",
  id: "",
 img: "",

 champ_id:""

  }


  constructor(props) {
    super(props);

    this.state = {
       display : false
    };

    this.delta = this.delta.bind(this);
}

delta() {
  this.setState({
    display: true
  });
}

    handleChange = event => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();


let id = CommentsRef.push().key;
        const NewComment= {
          id: id,
          vote: 0,
          champ_id: this.props.champ.id,
          text: this.state.text,
            timestamp: timeRef
          };



  if (NewComment.text.length) {
    //  CommentsRef.push(NewComment);
     CommentsRef.child(id).update(NewComment);
}


  };

    render() {

      console.log(this.props.champ);
    const {dispatch, loading} = this.props;
        return (
          <div className="row">
 { (this.state.display === false) ?
           <button className="btn btn-default" id="b" onClick={this.delta}> submit new counter tip </button>


         :   <form onSubmit={this.handleSubmit} id="form" style={{display:this.state.display}}>
                <label>
                 champ  Name:
                 
  <textarea className="form-control" id="name" rows="3"  value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} ></textarea>

                       
                </label>
    <label>
                <button type="submit" className="btn btn-primary mb-2" id="s">Submit</button>
                </label>
            </form>

            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log('this is champs from form: ',state.champs);
  console.log(state.loading);
  return{
    champ: state.champs.champ, 
    loading: state.loading
  }
}

export default connect(mapStateToProps, null)(Form)