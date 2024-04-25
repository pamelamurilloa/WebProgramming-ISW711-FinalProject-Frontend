import React, {useState, useEffect} from 'react'
import Input from '../atoms/Input'
import Submit from '../atoms/Submit'
import Button from '../atoms/Button'


const PinForm = ({loginTry, children}) => {

    const [pin, setPin] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isNaN( parseInt(pin) )) {
            loginTry(pin)
        }
    }

    return (
        <>
            <h2>Introduce your pin</h2>
            <form id="submit-pin" onSubmit={handleSubmit}>
                <Input
                    className="password"
                    id="pin" placeholder="Pin" required
                    maxLength="6" minLength="6"               
                    value={pin} 
                    onChange={setPin}
                />
                <Submit>Confirm</Submit>
                {children}
            </form>
        </>
    )
}

export default PinForm
