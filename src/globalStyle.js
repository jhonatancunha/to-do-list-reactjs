import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #232222;
  }
  
  body{
    background: #EDEDED;
  }
  
  .illustration{
      display: none;
  }

  @media (min-width: 800px){
    #root{
      display: flex;
      justify-content: center;
      margin-top: 15vh;
    }

    .illustration{
      align-self: center;
      display: block;
    }
  }

`;
