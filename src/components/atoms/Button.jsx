import React from 'react'
import classNames from 'classnames'

const Button = ({children = null, icon = null, className = '', ...props}) => {
    return (
        <button 
            className={classNames('main-button flex', className)}
            type='button'
            {...props}
        >
            {icon}{children}
        </button>
    )
}

export default Button