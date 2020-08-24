import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './reducers/cartReducer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import App from './App';
import Cart from './components/Cart';
import BaseLayout from './components/layout/BaseLayout';

let store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <BaseLayout>
      <Switch>

        <Route exact path='/' component={App}/>
        <Route path='/cart' component={Cart}/>

        <Route component={App}/>

      </Switch>
    </BaseLayout>
    </Router>
  </Provider>,
  document.getElementById('root')
);

