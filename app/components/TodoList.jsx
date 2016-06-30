import React, { PropTypes } from 'react';

import Todo from './Todo';

const TodoList = ({ todos, addTodo, onTodoClick }) => {
  let input;

  let onSubmitForm = (event) => {
    event.preventDefault();
    addTodo(input.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" ref={(node) => input = node} />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />)}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  addTodo: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
