import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Sixteen from 'containers/sixteen';
import sixteenReducers from './reducers/reducer.js';


let store = createStore(sixteenReducers, {});
let rootElement = document.querySelector('#app');
 
render(
  <Provider store={store}>
    <Sixteen />
  </Provider>,
  rootElement
);
