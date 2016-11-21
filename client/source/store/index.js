import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Thunk from 'redux-thunk';
import reducers from '../reducers';

const create = applyMiddleware(Thunk)(createStore);

function storeConfig (initialState) {
  return create(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

let store = storeConfig();
let history = syncHistoryWithStore(browserHistory, store);

export { history };
export default store;
