import React from 'react';

import Counter from 'components/Counter'
import Buttons from 'components/Buttons'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Buttons />
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};
