import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
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
=======
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import Cart from './components/Cart'
import reducer from './reducers/cartReducer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout';


let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())   
//reducer, devtools 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/cart' component={Cart}/>

        <Route  component={App}/>
        
      </Switch>
      </BaseLayout>
    </BrowserRouter>
>>>>>>> 13e79ab1ab314998b82803a62220e4206531c6e1
  </Provider>,
  document.getElementById('root')
);

<<<<<<< HEAD
=======

>>>>>>> 13e79ab1ab314998b82803a62220e4206531c6e1
