import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return {count: 0};
  }
};

let store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
