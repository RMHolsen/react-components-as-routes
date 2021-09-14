import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    textDecoration: "none",
    fontWeight: "bold"
  }
  
// obj with styling elements
// we don't need to export this anywhere, it just styles the Navbar links
// so it can just sit up there and think about its sins

class Navbar extends React.Component {
    render() {
        return(
            <div>
                <NavLink to="/" exact style={link}>Home</NavLink>
                {/* referring to the styling immediately above, can also add activeStyle={{color: "darkblue"}} for... some reason? */}
                <NavLink to="/about" exact style={link}>About</NavLink>
                <NavLink to="/login" exact style={link}>Log In</NavLink>
            </div>
        )
    }
}

export default Navbar