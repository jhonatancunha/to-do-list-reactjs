import { ADD_TODO } from './actions';

export const addToDo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: new Date().getTime(),
    text,
  },
});
