import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/index';

let store = createStore(reducers);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp {...store.getState()} />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
