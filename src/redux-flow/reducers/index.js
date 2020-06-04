import { combineReducers } from 'redux';

import reducerTodos from './todos';
import reducerVisibilityFilter from './visibilityFilter';

export default combineReducers({
  todos: reducerTodos,
  visibilityFilter: reducerVisibilityFilter,
});
