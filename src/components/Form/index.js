import React from 'react';

import { connect } from 'react-redux';
import { addToDo } from '../../redux-flow/reducers/todos/action-creators';

const Form = ({ handleAddToDo }) => (
  <form onSubmit={handleAddToDo}>
    <input type="text" name="todo" />
    <button type="submit">Adicionar</button>
  </form>
);

const mapDispatchToProps = (dispatch) => ({
  handleAddToDo: (e) => {
    e.preventDefault();
    dispatch(addToDo(e.target.todo.value));
    e.target.todo.value = '';
  },
});

export default connect(null, mapDispatchToProps)(Form);
