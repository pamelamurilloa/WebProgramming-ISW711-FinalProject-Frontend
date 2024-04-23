import React, {useState, useEffect} from 'react'

const PinForm = ({onConfirm}) => {

    const [pin, setPin] = useState('')

    const handleSubmit = () => {
        if (!isNan(pin)) {
            onConfirm(pin)
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
                <Button>Go Back</Button>
            </form>
        </>
    )
}

export default PinForm
