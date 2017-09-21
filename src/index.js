import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import RootContainer from './app/js/containers';
import rootReducer from './app/js/reducers';

const storeParameters = process.env.NODE_END === 'development'
  ? [rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]
  : [rootReducer];
const store = createStore(...storeParameters);

render(
  <Provider store={store}>
    <RootContainer/>
  </Provider>,
  document.getElementById('app')
);