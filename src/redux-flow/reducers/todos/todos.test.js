import { expect } from 'chai';
import deepfreeze from 'deep-freeze';
import todos from './index';

// ACTION
import { ADD_TODO } from './actions';

it('should todos be a function', () => {
  expect(todos).to.be.a('function');
});

it('should add a todo item', () => {
  const before = deepfreeze([]);
  const action = deepfreeze({
    type: ADD_TODO,
    payload: { id: 0, text: 'Hey' },
  });
  const after = [{ id: 0, text: 'Hey', completed: false }];

  expect(todos(before, action)).to.be.deep.equal(after);
});