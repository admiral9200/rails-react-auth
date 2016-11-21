import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth  from './auth';
import links from './links';


export default combineReducers({
  routing: routerReducer,
  auth,
  links
});
