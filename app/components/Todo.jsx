import React from 'react';

let Todo = ({ title, completed, onClick }) =>
  <li
    style={{textDecoration: completed ? 'line-through' : 'none'}}
    onClick={onClick}
    >
    {title}
  </li>;

export default Todo;
