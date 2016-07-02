let nextTodoId = 0;
export const addTodo = (title) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const changeVisiblityFilter = (filter) => ({
  type: 'CHANGE_VISIBLITY_FILTER',
  filter,
});
