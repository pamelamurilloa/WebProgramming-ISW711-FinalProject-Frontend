import {Link} from 'react-router-dom'
import Input from '../atoms/Input'
import Submit from '../atoms/Submit'
import React, {useState} from 'react'
import FrontPage from '../layouts/FrontPage/FrontPage'

const RegisterForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repPassword, setRepPassword] = useState('')
    const [pin, setPin] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [country, setCountry] = useState('')

    const handleRegister = () => {
        console.log(":D");
    }

  return (
    <FrontPage>
        <h2 id="front-page">Register</h2>
        <form id="register-form" onSubmit={handleRegister}>
            <div id="login-info">
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
                <Input
                    className="password"
                    type="password" id="repPassword" placeholder="repeat password" required 
                    value={repPassword} 
                    onChange={setRepPassword}
                />
                <Input
                    className="password"
                    id="pin" placeholder="pin" required
                    maxLength="6" minLength="6"
                    value={pin} 
                    onChange={setPin}
                />

            </div>
            <div id="personal-information">
                <Input
                    id="name" placeholder="name" required 
                    value={name} 
                    onChange={setName}
                />
                <Input
                    id="lastName" placeholder="last name" required 
                    value={lastName} 
                    onChange={setLastName}
                />
                <Input
                    type="date" id="birthday"required 
                    value={birthday} 
                    onChange={setBirthday}
                />
                <Input
                    id="country" placeholder="country" required                
                    value={country} 
                    onChange={setCountry}
                />
            </div>
            <Submit />
            <Link className="main-button" to="/login">Go Back</Link>
        </form>
    </FrontPage>
  )
}

export default RegisterForm