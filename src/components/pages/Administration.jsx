import React from 'react'
import PrivateLayout from '@components/layouts/PrivateLayout'
import KidCRUD from '@organisms/KidCRUD'
import PlaylistCRUD from '@organisms/PlaylistCRUD'
import { useUserPinSession } from '@src/hooks/users/useUserPinSession'

const Administration = () => {

  const {loading, data, isError, logout} = useUserPinSession();

  const headerLinks = [
    { id: 1, title: "Logout" }
  ];

const handleLinkClick = (linkId) => {
    if ( linkId === 1 ) {
        logout();
    } 
}
  
  return (
    <PrivateLayout headerLinks={headerLinks} onLinkClick={handleLinkClick} >
        <span id='id-kids-crud'></span>
        <KidCRUD/>
        <span id='id-playlist-crud'></span>
        <PlaylistCRUD />
    </PrivateLayout>
  )
}

export default Administration
