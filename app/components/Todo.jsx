import React from 'react';

export default class Todo extends React.Component {
  onToggleTodo() {
    const { store } = this.context;

    store.dispatch({type: 'TOGGLE_TODO', id: this.props.id});
  }

  render() {
    const { id, title, completed } = this.props;

    return (
      <li
        onClick={this.onToggleTodo.bind(this)}
        key={id}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        >
        {id}: {title}
      </li>
    );
  }
}

Todo.contextTypes = {
  store: React.PropTypes.object
};
