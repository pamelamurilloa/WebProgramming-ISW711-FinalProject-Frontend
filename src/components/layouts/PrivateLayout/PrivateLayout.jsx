import React from 'react'
import Header from '../../atoms/Header/Header'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
    )
}

export default PrivateLayout