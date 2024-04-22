import React from 'react'
import PrivateLayout from '../../layouts/PrivateLayout/PrivateLayout'
import useVideos from '../../../../hooks/useVideos'

const VideoFeed = () => {

    const {populateFeed} = useVideos()
    
    const playlistCreation = () => {
        
    }

    const onSearch = () => {

    }

    return (
        <PrivateLayout>
            <SearchBar onSearch={onSearch}/>
            <div id='playlist-buttons' >
                <ul>
                    {playlists.map(playlist => {
                        <PlaylistButton selected={playlist.selected}>
                            {`${playlist.name} ${playlist.number}`}
                        </PlaylistButton>
                    })}
                </ul>
            </div>
            <div class="page-content">
            
            </div>
        </PrivateLayout>
    )
}

export default VideoFeed