import {Link} from 'react-router-dom'
import React from 'react'
import FrontPage from '../../layouts/FrontPage/FrontPage'

const RegisterForm = () => {
  return (
    <FrontPage>

        <h2 id="front-page">Register</h2>
        <form id="register-form">
            <div id="login-info">
                <input className="input-form" type="email" id="email" name="email" placeholder="email" required/>
                <input className="input-form password" type="password" id="password" name="password" placeholder="password" required/>
                <input className="input-form password" type="password" id="rep_password" name="rep_password" placeholder="repeat password" required/>
                <input className="input-form password" type="text" maxlength="6" minlength="6" id="pin" name="pin" placeholder="pin" required/>
            </div>
            <div id="personal-information">
                <input className="input-form" type="text" id="name" name="name" placeholder="name" required/>
                <input className="input-form" type="text" id="last_name" name="last_name" placeholder="last name" required/>
                <input className="input-form" type="date" id="birthdate" name="birthdate" required/>
                <input className="input-form" type="string" id="country" name="country" placeholder="country"/>

            </div>
            <input className="main-button" type="submit" value="Confirm"/>
            <Link className="main-button" to="/login">Go Back</Link>
        </form>
    </FrontPage>
  )
}

export default RegisterForm