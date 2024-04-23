import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

// Local imports
import Input from '../atoms/Input'
import Submit from '../atoms/Submit'
import FrontPageLayout from '../layouts/FrontPageLayout/FrontPageLayout'
import { useAuth } from '../../contexts/authContext'
import { useSession } from '../../../hooks/users/useSession'

const LoginForm = () => {

    const {user, setUser} = useAuth()
    const {loading, data, isError, login} = useSession()

    const [code, setCode] = useState('')
    const [isCodeSent, setIsCodeSent] = useState('')

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

        login(email, password)


        setUser({name:'Pam', lastName:'Murillo'});
        console.log(`You've logged in with email: ${email}, password: ${password}`)
        //message with backend
    }

    const handleCodeSent = (event) => {
        event.preventDefault()
    }

    return (
        <FrontPageLayout>
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

            {
                <PopUp>
                    <h3>Enter the code sent to your cellphone</h3>
                    <form id="login-form" onSubmit={handleCodeSent}>
                        <Input
                            id="code" placeholder="Your code" required
                            maxLength="5" minLength="5"
                            value={code} 
                            onChange={setCode}
                        />
                        <Submit/>
                    </form>
                </PopUp>
            }
        </FrontPageLayout>
    )
}

export default LoginForm