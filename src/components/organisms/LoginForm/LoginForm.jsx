import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

// Local imports
import Input from '../../atoms/Input/Input'
import Submit from '../../atoms/Submit/Submit'
import FrontPage from '../../layouts/FrontPage/FrontPage'
import { useAuth } from '../../../contexts/authContext'
import { useSession } from '../../../../hooks/useSession'

const LoginForm = () => {

    const {user, setUser} = useAuth();
    const {loading, data, isError, login} = useSession();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(
        () => {
            if (data) {
                setUser(user);
            }
        },
        [data]
    )
    
    const handleLogin = (event) => {
        event.preventDefault()

        login(email, password);


        setUser({name:'Pam', lastName:'Murillo'});
        console.log(`You've logged in with email: ${email}, password: ${password}`)
        //message with backend
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

                {loading ? "Loading..." : <Submit />}
                <Link className="main-button" to="/register">Register</Link>
            </form>
        </FrontPage>
    )
}

export default LoginForm