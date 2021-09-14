import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
// This file has been refactored
// For all notes up to this point see index-prefactor.js

const link = {
  textDecoration: "none",
  fontWeight: "bold"
} // object w/styling elements

const NavBar = () => {
  <div>
    <NavLink to="/" exact style={link}>Home</NavLink>
    {/* referring to the styling immediately above, can also add activeStyle={{color: "darkblue"}} for... some reason? */}
    <NavLink to="/about" exact style={link}>About</NavLink>
    <NavLink to="/login" exact style={link}>Log In</NavLink>
  </div>
} // functional component providing navigation

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is the About component.</h1>
    </div>
  );
};

const Login = () => {
  return(
    <div>
      <form>
        <div> {/* Some styling goes here HAH I FIGURED OUT HOW TO COMMENT */}
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

ReactDOM.render(
  // NEW HOTNESS:
  <Router> 
    <div>
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
