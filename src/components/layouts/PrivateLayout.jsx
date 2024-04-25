import React, {useEffect} from 'react'
import { Navigate, useNavigate} from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import Header from '../atoms/Header/Header'

const PrivateLayout = ({children, headerLinks, onLinkClick}) => {

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

  return user? (
    
    <>
        <Header links={headerLinks} onLinkClick={(linkId) => onLinkClick(linkId)}/>
        {children}
    </>
    ) : <Navigate to = "/"/>
}

export default PrivateLayout