import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducers/counterReducer'

let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  //reducer

//create store

// wrap application inside Provider

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root')
);

