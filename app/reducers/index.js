import { combineReducers } from 'redux';

import todos from './todos';
import visiblityFilter from './visiblityFilter';

const reducers = combineReducers({
  todos,
  visiblityFilter,
});

export default reducers;
