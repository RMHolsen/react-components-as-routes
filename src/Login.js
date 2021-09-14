import React from "react"

class Login extends React.Component {
    render() {
        return(
            // the return() is the div we're wrapping everything in. so to speak.
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
        )
    }
}

export default Login