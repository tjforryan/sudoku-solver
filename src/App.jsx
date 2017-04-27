import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import BasicContainer from './containers/BasicContainer';
import rootReducer from './reducers/root';

const store = createStore(
  rootReducer,
  applyMiddleware(
    promiseMiddleware,
    routerMiddleware(browserHistory),
    logger
  )
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="*" component={BasicContainer} />
    </Router>
  </Provider>
  , document.getElementById('app'));
