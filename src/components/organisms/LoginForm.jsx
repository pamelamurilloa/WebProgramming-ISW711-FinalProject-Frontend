import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

// Local imports
import Input from '@atoms/Input'
import Submit from '@atoms/Submit'
import FrontPageLayout from '@layouts/FrontPageLayout/FrontPageLayout'
import PopUp from '@molecules/PopUp'
import Button from '@atoms/Button'
import { useAuth } from '@contexts/authContext'
import { useSession } from '@hooks/users/useSession'
import { useCode} from '@hooks/users/useCode'

const LoginForm = () => {

    const {setUser} = useAuth()
    const {loading, data: loggedUser, isError, login} = useSession()
    const {loading:loadingCode, data: dataCode, isError: isErrorCode, verifyCode} = useCode()


    const [code, setCode] = useState('')
    const [isCodeSent, setIsCodeSent] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(
        () => {
            if (loggedUser) {
                setIsCodeSent(true)
            }
        },
        [loggedUser]
    )

    useEffect(
        () => {
            if (dataCode) {
                setIsCodeSent(false)
                setUser(loggedUser)
            }
        },
        [dataCode]
    )
    
    const handleLogin = (event) => {
        event.preventDefault()

        login(email, password)
    }

    const handleCodeSent = (event) => {
        event.preventDefault()

        if(!isNaN(code)) {
            verifyCode(loggedUser._id, code)
        }
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
                isCodeSent &&
                <PopUp>
                    <h3>Enter the code sent to your cellphone</h3>
                    <form id="code-form" onSubmit={handleCodeSent}>
                        <Input
                            id="code" placeholder="Your code" required
                            maxLength="4" minLength="4"
                            value={code} 
                            onChange={setCode}
                        />
                        {loadingCode ? "Loading..." : <Submit />}
                        <Button onClick={() => setIsCodeSent(false)}>Cancel</Button>
                    </form>
                    
                    {
                        isErrorCode && 
                        <span>"Invalid code"</span>
                    }
                </PopUp>
            }
        </FrontPageLayout>
    )
}

export default LoginForm