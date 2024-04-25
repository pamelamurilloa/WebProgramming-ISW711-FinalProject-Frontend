import React from 'react'

const Submit = ({ children }) => {
  return (
    <input className="main-button" type="submit" value={children || 'Confirm'}/>
  )
}

export default Submit