import React from 'react';

// COMPONENTS
import Form from '../Form';
import TodosList from '../Todos-List';
import Filter from '../Filter';

// STYLES
import { Wrapper } from './style';

export default () => (
  <Wrapper>
    <Form />
    <TodosList />
    <Filter />
  </Wrapper>
);
