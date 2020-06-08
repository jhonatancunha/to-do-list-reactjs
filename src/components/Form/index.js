import React from 'react';

import { connect } from 'react-redux';
import { addToDo } from '../../redux-flow/reducers/todos/action-creators';

// STYLE
import { Wrapper, Input, Button } from './style';

const Form = ({ handleAddToDo }) => (
  <Wrapper onSubmit={handleAddToDo}>
    <Input placeholder="Digite aqui sua tarefa..." type="text" name="todo" />
    <Button type="submit">ENVIAR</Button>
  </Wrapper>
);

const mapDispatchToProps = (dispatch) => ({
  handleAddToDo: (e) => {
    e.preventDefault();
    dispatch(addToDo(e.target.todo.value));
    e.target.todo.value = '';
  },
});

export default connect(null, mapDispatchToProps)(Form);
