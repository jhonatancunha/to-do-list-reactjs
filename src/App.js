import React from 'react';

import { connect } from 'react-redux';
import { addToDo } from './redux-flow/reducers/todos/action-creators';

const App = ({ todos, handleAddToDo }) => {
  return (
    <div>
      <form onSubmit={handleAddToDo}>
        <input type="text" name="todo" />
        <button type="submit">Adicionar</button>
      </form>
      {console.log(todos)}
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            style={{
              textDecorationColor: item.completed ? 'line-through' : 'none',
            }}
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
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddToDo: (e) => {
    e.preventDefault();
    dispatch(addToDo(e.target.todo.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
