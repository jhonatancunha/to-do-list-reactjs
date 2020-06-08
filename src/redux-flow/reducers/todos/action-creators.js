import { v4 } from 'uuid';
import { ADD_TODO, TOOGLE_TODO, REMOVE_TODO } from './actions';

export const addToDo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: v4(),
    text,
  },
});

export const toogleToDo = (id) => ({
  type: TOOGLE_TODO,
  payload: { id },
});

export const removeToDo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});
