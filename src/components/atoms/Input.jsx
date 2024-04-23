import React from 'react'
import { useAuth } from '../../contexts/authContext'

const Input = ({value, onChange, className, ...props} ) => {

    const handleChange = ({ target: { value}}) => {
        onChange(value)
    }

    const {user, setUser} = useAuth()
    console.log(user, setUser);

    return (
    <input 
        className={`input-form ${className}`}
        type="text"
        value={value} 
        onChange={handleChange}
        {...props}
    />
  )
}

export default Input