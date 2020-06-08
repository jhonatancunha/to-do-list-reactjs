import React from 'react';

// COMPONENTS
import Container from './components/Container';
import Illustration from './assets/illustration.svg';

// STYLE
import { GlobalStyle } from './globalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <img className="illustration" src={Illustration} alt="ToDoList!" />
      <Container />
    </>
  );
};

export default App;
