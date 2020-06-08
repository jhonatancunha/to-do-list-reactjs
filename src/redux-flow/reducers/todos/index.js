import { ADD_TODO, TOOGLE_TODO, REMOVE_TODO } from './actions';

import createReducer from '../create-reducer';

export const initialState = [];

const todos = createReducer(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      id: action.payload.id,
      text: action.payload.text,
      completed: false,
    }),
  [TOOGLE_TODO]: (state, action) =>
    state.map((todo) => {
      if (todo.id !== action.payload.id) return todo;
      return {
        ...todo,
        completed: !todo.completed,
      };
    }),
  [REMOVE_TODO]: (state, action) =>
    state.filter((item) => action.payload.id !== item.id),
});

export default todos;
