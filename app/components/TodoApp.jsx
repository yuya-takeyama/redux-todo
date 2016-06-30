import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';
import VisiblityFilter from './VisiblityFilter';

export default class TodoApp extends React.Component {
  getVisibleTodos() {
    const { todos, visiblityFilter } = this.props;

    switch (visiblityFilter) {
      case 'Incomplete':
        return todos.filter(todo => !todo.completed);
      case 'Completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  render() {
    return (
      <div>
        <VisibleTodoList todos={this.getVisibleTodos()} />
        <VisiblityFilter visiblityFilter={this.props.visiblityFilter}/>
      </div>
    );
  }
}
