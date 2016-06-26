let id = 1;

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { id: id++, title: action.title, completed: false };

    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return { id: state.id, title: state.title, completed: !state.completed };
      }

      return { id: state.id, title: state.title, completed: state.completed };

    default:
      return state;
  }
};

export default todo;
