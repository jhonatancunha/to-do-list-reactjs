import React from 'react';

// COMPONENTS
import Form from './components/Form';
import TodosList from './components/Todos-List';
import Filter from './components/Filter';

const App = () => {
  return (
    <div>
      <Form />
      <TodosList />
      <Filter />
    </div>
  );
};

export default App;
