import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@contexts/authContext';
import './FrontPageLayout.scss';

function FrontPage({ children }) {

  const {user} = useAuth()
  const navigate = useNavigate()

  useEffect(
    () => {
      if(user) {
        navigate("/avatar");
      }
    },
    [user]
  )

  return (
      <div id="background-band">
      <div className="main-title">
          <h1 id="tube-logo big-title">Tube</h1>
          <h2 id="kids-logo big-title">Kids</h2>
      </div>
      <div className="subtitle top-left">
          <h3>Pamela Murillo</h3>
          <h4>II Project</h4>
          <h4>ISW-711</h4>
      </div>
      <div className="circle-form">
          {children}
      </div>
  </div>
  )
}

export default FrontPage
