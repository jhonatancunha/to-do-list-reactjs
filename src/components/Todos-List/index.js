import React from 'react';

import { connect } from 'react-redux';
import { toogleToDo } from '../../redux-flow/reducers/todos/action-creators';
import * as filterActions from '../../redux-flow/reducers/visibilityFilter/actions';

const getVisible = (todos, activeFilter) => {
  const filterItems = {
    [filterActions.SHOW_ALL]: todos,
    [filterActions.SHOW_COMPLETED]: todos.filter((item) => item.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter((item) => !item.completed),
  };

  return filterItems[activeFilter];
};

const TodosList = ({ todos, handleToogleToDo, activeFilter }) => (
  <ul>
    {getVisible(todos, activeFilter).map((item) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        key={item.id}
        style={{
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
        onClick={handleToogleToDo(item.id)}
        onKeyDown={handleToogleToDo(item.id)}
      >
        {item.text}
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter,
});
const mapDispatchToProps = (dispatch) => ({
  handleToogleToDo: (id) => (e) => {
    dispatch(toogleToDo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
