import React from 'react'
import Header from '../atoms/Header/Header'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {

  const {user} = useAuth()

  return user? (
    
    <>
        <Header/>
        <Outlet/>
    </>
    ) : <Navigate to = "/"/>
}

export default PrivateLayout