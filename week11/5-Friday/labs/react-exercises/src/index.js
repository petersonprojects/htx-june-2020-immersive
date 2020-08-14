import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import BaseLayout from './Components/Layout/BaseLayout';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Blogs from './Components/Blogs';
import Stepper from './Components/Stepper';
import Puppies from './Components/Puppies';
import Todo from './Components/Todo';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  
  <BrowserRouter>

    <BaseLayout>

      <Switch>

        <Route exact path="/" component={App}/>

        {/* positioning on the redirect matters */}

        <Redirect from="/aboutus" to="/"/>
        <Route path="/aboutus" component={AboutUs}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/stepper" component={Stepper}/>
        <Route path="/puppies" component={Puppies}/>
        <Route path="/todo" component={Todo}/>

        <Route exact path="/blogs" component={Blogs}/>
        <Route path="/blogs/:blogsID" component={Blogs}/>

        {/* this is used as a catch all for the routes */}
        <Route component={App}/>

      </Switch>

    </BaseLayout>

  </BrowserRouter>
  ,
  document.getElementById('root')
);


