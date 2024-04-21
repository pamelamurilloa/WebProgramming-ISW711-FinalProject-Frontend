import React from 'react'

const Input = ({value, onChange, className, ...props} ) => {

    const handleChange = ({ target: { value}}) => {
        onChange(value)
    }

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