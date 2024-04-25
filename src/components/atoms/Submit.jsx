import classNames from 'classnames'
import React from 'react'

const Submit = ({ children = 'Confirm', className = null }) => {
  return (
    <input
      className={classNames('main-button', className)}
      type="submit" 
      value={children}
    />
  )
}

export default Submit