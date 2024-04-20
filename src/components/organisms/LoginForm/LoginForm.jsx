import {Link} from 'react-router-dom'
import React from 'react'
import FrontPage from '../../layouts/FrontPage/FrontPage'

const LoginForm = () => {
  return (
    <FrontPage>
        <h2 id="front-page">Login</h2>
        <form id="login-form">
            <input className="input-form" type="email" id="email" name="email" placeholder="email" required/>

            <input className="input-form password" type="password" id="password" name="password" placeholder="password" required/>

            <input className="main-button" type="submit" value="Confirm"/>
            <Link className="main-button" to="/register">Register</Link>
        </form>
    </FrontPage>
  )
}

export default LoginForm