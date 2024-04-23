import React from 'react'


const Button = ({children, icon}) => {
    return (
        <button 
            className={`main-button flex ${className}`}
            type='button'
            {...props}
        >
            {icon}{children}
        </button>
    )
}

export default Button