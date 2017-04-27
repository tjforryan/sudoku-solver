import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import basicReducer from './basicReducer';

const Reducer = combineReducers({
  basicReducer,
  routing: routerReducer,
});

export default Reducer;
