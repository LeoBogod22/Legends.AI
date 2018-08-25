import { createStore, combineReducers } from 'redux';
import champs from './champs';

  const rootReducer = combineReducers({

   champs:champs

  });

export default rootReducer;