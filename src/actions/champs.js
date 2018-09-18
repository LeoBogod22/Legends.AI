
import axios from 'axios'



import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

import { ChampsRef,  provider } from "../components/reference";



export const GET_SINGLE_CHAMP_PENDING = 'GET_SINGLE_CHAMP_PENDING'

export const GET_SINGLE_CHAMP = 'GET_SINGLE_CHAMP';

export const GET_MATCH_CHAMP = 'GET_MATCH_CHAMP';
export const EXCHANGE_MATCH_CHAMP = 'EXCHANGE_MATCH_CHAMP';

export function  getsinglechamp(id){
    return dispatch => {
        console.log('dispatching single champ pending');
        dispatch({ type: GET_SINGLE_CHAMP_PENDING });
     ChampsRef.child(id).on("value", function(snapshot) {
     	console.log('dispatching single champ', snapshot.val());
    dispatch({
      type: GET_SINGLE_CHAMP,
      payload: snapshot.val()
   })
  
 })
  }
}

export function  getmatchchamp(id){
  return dispatch => {
   ChampsRef.child(id).on("value", function(snapshot) {
     console.log('dispatching match champ', snapshot.val());
  dispatch({
    type: GET_MATCH_CHAMP,
    payload: snapshot.val()    
 })

})
}
}

export function  exchangeMatchChamp(id){
  return {
    type: EXCHANGE_MATCH_CHAMP    
  };
}