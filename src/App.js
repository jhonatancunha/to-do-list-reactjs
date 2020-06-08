import React from 'react';

// COMPONENTS
import Container from './components/Container';
import Illustration from './assets/illustration.svg';
import Footer from './components/Footer';

// STYLE
import { GlobalStyle } from './globalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <img className="illustration" src={Illustration} alt="ToDoList!" />
        <Container />
      </div>
      <Footer />
    </>
  );
};

export default App;
