import {Link} from 'react-router-dom'
import Input from '../../atoms/Input/Input'
import Submit from '../../atoms/Submit/Submit'
import React, {useState} from 'react'
import FrontPage from '../../layouts/FrontPage/FrontPage'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = (event) => {
        event.preventDefault()
        console.log(`You've logged in with email: ${email}, password: ${password}`)
    }

    return (
        <FrontPage>
            <h2 id="front-page">Login</h2>
            <form id="login-form" onSubmit={handleLogin}>
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

                <Submit />
                <Link className="main-button" to="/register">Register</Link>
            </form>
        </FrontPage>
    )
}

export default LoginForm