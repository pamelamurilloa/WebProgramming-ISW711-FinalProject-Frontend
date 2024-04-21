import {Link} from 'react-router-dom'
import Input from '../../atoms/Input/Input'
import React, {useState} from 'react'
import FrontPage from '../../layouts/FrontPage/FrontPage'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <FrontPage>
            <h2 id="front-page">Login</h2>
            <form id="login-form">
                <Input 
                    type="email" id="email" placeholder="email" required 
                    value={email} 
                    onChange={setEmail}
                />
                <Input 
                    className="password"
                    type="password" id="password" placeholder="password" required
                    value={password}
                    onChange={setPassword}
                />

                <input className="main-button" type="submit" value="Confirm"/>
                <Link className="main-button" to="/register">Register</Link>
            </form>
        </FrontPage>
    )
}

export default LoginForm