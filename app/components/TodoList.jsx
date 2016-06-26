import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
  onAddTodo() {
    const { store } = this.context;

    store.dispatch({type: 'ADD_TODO', title: this.input.value});
  }

  render() {
    return (
      <div>
        <input type="text" ref={(node) => this.input = node} />
        <input type="button" value="Add" onClick={this.onAddTodo.bind(this)} />
        <ul>
          {this.props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </ul>
      </div>
    );
  }
}

TodoList.contextTypes = {
  store: React.PropTypes.object
};
