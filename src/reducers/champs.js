import {
    GET_SINGLE_CHAMP,
    GET_SINGLE_CHAMP_PENDING,
    GET_MATCH_CHAMP,
    EXCHANGE_MATCH_CHAMP
} from '../actions/champs'



import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'


import { ChampsRef, provider } from "../components/reference";

const initialState = {
    payload: '',
    champ: {
        name: '',
        img: '',
        stats: '',
        id: ''
    },
    matchchamp: {
        name: '',
        img: '',
        stats: '',
        id: '',
        position: '',
        weak: '',
        strong: '',
        winrate: '',
        lanewin: ''
    },
    loading: false,
};


function Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SINGLE_CHAMP_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_SINGLE_CHAMP:
            return {
                ...state,
                champ: action.payload,
                loading: false
            }
        case GET_MATCH_CHAMP:
            return {
                ...state,
                matchchamp: action.payload,
                loading: false
            }
        case EXCHANGE_MATCH_CHAMP:
            {
                let champTemp = state.champ;
                return {
                    ...state,
                    champ: state.matchchamp,
                    matchchamp: champTemp
                }
            }
        default:
            return state
    }
}


export default Reducer;