import React from 'react';

import { connect } from 'react-redux';
import { toogleToDo } from '../../redux-flow/reducers/todos/action-creators';

const TodosList = ({ todos, handleToogleToDo }) => (
  <ul>
    {todos.map((item) => (
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
});
const mapDispatchToProps = (dispatch) => ({
  handleToogleToDo: (id) => (e) => {
    dispatch(toogleToDo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
