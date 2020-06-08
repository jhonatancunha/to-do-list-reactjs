import React from 'react';
import ReactDOM from 'react-dom';
// CONFIGURANDO REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux-flow/reducers';
// ----
import App from './App';
import * as serviceWorker from './serviceWorker';

// FUNCÕES PARA SALVAR NO LOCALSTORAGE
import { loadStorage, saveStorage } from './localStorage';

const store = createStore(reducer, loadStorage());

store.subscribe(() => {
  saveStorage({
    todos: store.getState().todos,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
