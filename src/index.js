import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { getTodosAsync,getTodoStatusListAsync,getTodoCategoryListAsync } from './components/todo-list/todos.reducer'

store.dispatch(getTodosAsync())
store.dispatch(getTodoStatusListAsync())
store.dispatch(getTodoCategoryListAsync())

ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
