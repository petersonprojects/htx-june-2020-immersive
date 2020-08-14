import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import AboutUs from './components/AboutUs'
import Blogs from './components/Blogs'
import ContactUs from './components/ContactUs'
import Movies from './components/Movies';
import Todo from './components/Todo';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>

        <Redirect from="/aboutus" to="/" />
        <Route path="/aboutus" component={AboutUs} />
        <Route exact path="/blogs"  component={Blogs}/>
        <Route path="/blogs/:blogsID"  component={Blogs}/>

        <Route path="/contactus" component={ContactUs} />
        <Route path="/movies" component={Movies} />
        <Route path="/todo" component={Todo} />

        <Route component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

