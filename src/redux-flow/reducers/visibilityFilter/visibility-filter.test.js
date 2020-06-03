import { expect } from 'chai';
import deepfreeze from 'deep-freeze';
import visibilityFilter from './index';

it('visibilityFilter should be a function', () => {
  expect(visibilityFilter).to.be.a('function');
});

it('should show all todos', () => {
  const before = 'SHOW_COMPLETED';
  const action = deepfreeze({
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: 'SHOW_ALL' },
  });
  const after = 'SHOW_ALL';

  expect(visibilityFilter(before, action)).to.be.equal(after);
});
