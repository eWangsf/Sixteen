import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import { createLogger } from 'redux-logger';

import Sixteen from 'containers/sixteen';
import sixteenReducers from './reducers';

const logger = createLogger();
let store = createStore(sixteenReducers, applyMiddleware(logger));
let rootElement = document.querySelector('#app');
 
render(
  <Provider store={store}>
    <BrowserRouter >
      <Route path="/" component={Sixteen} />
    </BrowserRouter>
  </Provider>,
  rootElement
);

