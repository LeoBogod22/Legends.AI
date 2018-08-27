import React, { Component } from 'react';

import { ChampsRef, timeRef } from './reference';
import { getsinglechamp } from '../actions/champs';
import { connect } from 'react-redux';
import { Redirect,Link } from 'react-router-dom'
class OneChamp extends Component {



componentDidMount(){
    const {dispatch, match} = this.props;
    dispatch(getsinglechamp(match.params.id));

}




render(){
 const {dispatch, loading} = this.props;
 console.log(this.props);
  let content = null;
      if (loading) {

        content = (<p>Loading...</p>)
    } else {
        content = (
        <div>

        <div>     <img src={this.props.champs.img}/> </div>
        </div>

)
    }
    return(

<div> { content }</div>











   );
  }
}



export default OneChamp;