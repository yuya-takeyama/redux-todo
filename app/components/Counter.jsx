import React from 'react';

export default class Counter extends React.Component {
  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <div>{state.count}</div>
    );
  }
}

Counter.contextTypes = {
  store: React.PropTypes.object
};
