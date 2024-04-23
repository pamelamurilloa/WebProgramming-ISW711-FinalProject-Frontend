import React from 'react'

const PopUp = ({children}) => {
  return (
    <div className="popup">
        <div className="popup-content">
            {children}
        </div>
    </div>
  )
}

export default PopUp