import React from 'react'

const Submit = ({ children = 'Confirm' }) => {
  return (
    <input className="main-button" type="submit" value={children}/>
  )
}

export default Submit