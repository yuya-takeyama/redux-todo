import { combineReducers } from 'redux';

import todos from 'reducers/todos';
import visiblityFilter from 'reducers/visiblityFilter';

const reducers = combineReducers({
  todos,
  visiblityFilter,
});

export default reducers;
