import React from 'react'
import Header from '../../atoms/Header/Header'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {

  const {user} = useAuth()
  const navigate = useNavigate()

  useEffect(
    () => {
      if(!user) {
        navigate("/");
      }
    },
    [user]
  )

  return (
    <>
        <Header/>
        <Outlet/>
    </>
    )
}

export default PrivateLayout