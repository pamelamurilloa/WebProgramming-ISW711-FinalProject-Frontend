import React from 'react'

// Local imports
import PrivateLayout from '../layouts/PrivateLayout'
import useVideos from '../../../hooks/useVideos'
import PlaylistButton from '../atoms/PlaylistButton'

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
                    {
                    
                        playlists.map(playlist => {
                            <PlaylistButton selected={playlist.selected}>
                                {`${playlist.name} ${playlist.number}`}
                            </PlaylistButton>
                        })
                    
                    }
                </ul>
            </div>
            <div class="page-content">
            
            </div>
        </PrivateLayout>
    )
}

export default VideoFeed