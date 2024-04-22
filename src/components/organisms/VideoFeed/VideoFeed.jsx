import React from 'react'
import PrivateLayout from '../../layouts/PrivateLayout/PrivateLayout'

const VideoFeed = () => {
  return (
    <PrivateLayout>
        <Outlet />
        <div class="page-content">
        
        </div>
    </PrivateLayout>
  )
}

export default VideoFeed