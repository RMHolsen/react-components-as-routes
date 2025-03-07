import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
// This file has been refactored
// For all notes up to this point see index-prefactor.js

ReactDOM.render(
  // NEW HOTNESS:
  <Router> 
    <div>
    <Navbar />
    <Route exact path="/" component={Home} />  
    {/* If you want the full HTML/JSX of the Home component to render all the time, as in a header,
    you want <Route path="/" component={Home} />
    Otherwise you want exact path="/" */}
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    {/* We can also write HTML/JSX directly, thusly:
    <Route exact path="/hello-world" render={ () => <h1>Hello World!</h1>} />*/}
    </div>
    {/* in React each component can have only one HTML node child, so we wrap it all in a div. we do this a lot.*/}
  </Router>,
  // fairly straightforward!
  // as above, Router is o ur alias for BrowserRouter
  // path and component are props referring to the displayed path and the component rendered

  // Change to have router coordinate what is displayed
  // OLD AND BUSTED: <Home />
  document.getElementById('root')
);
