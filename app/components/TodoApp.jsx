import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';
import VisiblityFilter from './VisiblityFilter';

const TodoApp = () =>
  <div>
    <VisibleTodoList />
    <VisiblityFilter />
  </div>;

export default TodoApp;
