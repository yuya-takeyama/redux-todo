const visiblityFilter = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_VISIBLITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visiblityFilter;
