import React from 'react';

import { connect } from 'react-redux';
import {
  addToDo,
  toogleToDo,
} from './redux-flow/reducers/todos/action-creators';

const App = ({ todos, handleAddToDo, handleToogleToDo }) => {
  return (
    <div>
      <form onSubmit={handleAddToDo}>
        <input type="text" name="todo" />
        <button type="submit">Adicionar</button>
      </form>

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

      <div>
        <h3>Mostrar</h3>
        <span>Todos </span> | <a href="#"> Finalizados </a> |
        <a href="#"> A fazer </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddToDo: (e) => {
    e.preventDefault();
    dispatch(addToDo(e.target.todo.value));
    e.target.todo.value = '';
  },
  handleToogleToDo: (id) => (e) => {
    dispatch(toogleToDo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
