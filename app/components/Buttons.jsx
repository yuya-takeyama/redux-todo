import React from 'react';

export default class Buttons extends React.Component {
  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <div>
        <input type="button" value="-" onClick={() => store.dispatch({type: 'DECREMENT'})} />
        <input type="button" value="+" onClick={() => store.dispatch({type: 'INCREMENT'})} />
      </div>
    );
  }
}

Buttons.contextTypes = {
  store: React.PropTypes.object
};
