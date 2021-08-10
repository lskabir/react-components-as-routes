import React from 'react';
import ReactDOM from 'react-dom';
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
import Message from './Message'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/messages" component={Message} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>),
  document.getElementById('root')
);
