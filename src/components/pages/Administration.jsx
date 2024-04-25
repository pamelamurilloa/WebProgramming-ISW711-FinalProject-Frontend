import React from 'react'
import PrivateLayout from '@components/layouts/PrivateLayout'
import KidCRUD from '../organisms/KidCRUD'
import PlaylistCRUD from '../organisms/PlaylistCRUD'

const Administration = () => {

  const links = [];

  const handleLinkClick = () => {

  }
  
  return (
    <PrivateLayout headerLinks={links} onLinkClick={handleLinkClick} >
        <KidCRUD />
        <PlaylistCRUD />
    </PrivateLayout>
  )
}

export default Administration
