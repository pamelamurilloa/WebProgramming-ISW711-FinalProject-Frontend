import React from 'react'
import KidCRUD from '../organisms/KidCRUD'
import PlaylistCRUD from '../organisms/PlaylistCRUD'

const Administration = () => {
  return (
    <PrivateLayout>
        <KidCRUD />
        <PlaylistCRUD />
    </PrivateLayout>
  )
}

export default Administration
