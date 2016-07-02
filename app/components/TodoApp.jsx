import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';
import VisiblityFilter from './VisiblityFilter';

export default class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <VisibleTodoList />
        <VisiblityFilter visiblityFilter={this.props.visiblityFilter}/>
      </div>
    );
  }
}
