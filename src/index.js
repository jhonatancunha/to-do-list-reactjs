import React from 'react';
import ReactDOM from 'react-dom';
// CONFIGURANDO REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducerTodos from './redux-flow/reducers/todos';
import reducerVisibilityFilter from './redux-flow/reducers/visibilityFilter';
// ----
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer = (state = {}, action) => {
  return {
    todos: reducerTodos(state.todos, action),
    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action),
  };
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('state', store.getState());
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
