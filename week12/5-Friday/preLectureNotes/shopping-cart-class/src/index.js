import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import cartReducer from './reducers/cartReducer'
import Cart from './components/Cart.js'
import BaseLayout from './components/layout/BaseLayout'

import App from './App';

let store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //reducer

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <BaseLayout >
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Cart} />
          <Route component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider >,
  document.getElementById('root')
);
