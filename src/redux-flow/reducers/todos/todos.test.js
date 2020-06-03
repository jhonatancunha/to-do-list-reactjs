import { expect } from 'chai';
import deepfreeze from 'deep-freeze';
import todos, { initialState } from './index';

// ACTION
import { ADD_TODO, TOOGLE_TODO } from './actions';

// TESTES DE CAMINHO FELIZ

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

it('should add a todo item', () => {
  const before = deepfreeze([]);
  const action = deepfreeze({
    type: ADD_TODO,
    payload: { id: 0, text: 'Hey' },
  });
  const after = [{ id: 0, text: 'Hey', completed: false }];

  expect(todos(before, action)).to.be.deep.equal(after);
});

it('should add a new todo item', () => {
  const before = deepfreeze([
    {
      id: 0,
      text: 'Hey',
      completed: false,
    },
  ]);

  const action = deepfreeze({
    type: ADD_TODO,
    payload: { id: 1, text: 'Ho' },
  });

  const after = [
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false },
  ];

  expect(todos(before, action)).to.be.deep.equal(after);
});

it('should toogle first todo item', () => {
  const before = deepfreeze([
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false },
  ]);
  const action = deepfreeze({ type: TOOGLE_TODO, payload: { id: 0 } });

  const after = [
    { id: 0, text: 'Hey', completed: true },
    { id: 1, text: 'Ho', completed: false },
  ];

  expect(todos(before, action)).to.be.deep.equal(after);
});

//  TESTES DE ERRO
it('should return the latest state when action is unknown', () => {
  const before = deepfreeze([{ id: 0, text: 'Hey', completed: false }]);

  const action = deepfreeze({ type: 'UNKNOW' });

  const after = deepfreeze([{ id: 0, text: 'Hey', completed: false }]);

  expect(todos(before, action)).to.be.deep.equal(after);
});

it('should return initialState when state before is undefined', () => {
  const before = undefined;
  const action = deepfreeze({});
  const after = initialState;

  expect(todos(before, action)).to.be.deep.equal(after);
});
