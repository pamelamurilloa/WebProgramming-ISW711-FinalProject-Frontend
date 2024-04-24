import React, {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'

// Local imports
import Input from '../atoms/Input'
import Submit from '../atoms/Submit'
import FrontPageLayout from '../layouts/FrontPageLayout/FrontPageLayout'
import { useRegister } from '../../../hooks/users/useRegister'

const RegisterForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repPassword, setRepPassword] = useState('')
    const [pin, setPin] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [cellphone, setCellphone] = useState('')
    
    const {loading, data, isError, register} = useRegister();


    const handleRegister = () => {
        let today = new Date();
        let date = new Date(birthday);
        let age = today.getFullYear() - date.getFullYear();
        let monthDiff = today.getMonth() - date.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
            age--;
        }
        if(email, password, repPassword, pin, name, lastName, birthday, cellphone && password === repPassword && !isNaN(pin) && age >= 18) {
            register({email, password, repPassword, pin, name, lastName, birthday, cellphone})
            if (data) {
                <Navigate replace to ="/login"/>
            }
        }
    }

  return (
    <FrontPageLayout>
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
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                    id="cellphone" type="tel" placeholder="Country code and cellphone" required                
                    value={cellphone} 
                    onChange={setCellphone}
                />
            </div>
            <Submit />
            <Link className="main-button" to="/login">Go Back</Link>
        </form>
    </FrontPageLayout>
  )
}

export default RegisterForm