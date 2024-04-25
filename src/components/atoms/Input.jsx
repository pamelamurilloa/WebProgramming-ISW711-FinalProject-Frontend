import classNames from 'classnames'
import React from 'react'

const Input = ({value, onChange, className = '', ...props} ) => {

    const handleChange = ({ target: { value, type, checked } }) => {
        if (type === "checkbox") {
            onChange(checked)
        } else {
            onChange(value)
        }
    };

    return (
    <input 
        className={ classNames ('input-form', className) }
        type="text"
        value={value} 
        onChange={handleChange}
        {...props}
    />
  )
}

export default Input