import React, { useState, useEffect } from 'react'

// Local imports
import PrivateLayout from '@layouts/PrivateLayout'
import PlaylistButton from '@atoms/PlaylistButton'
import SearchBar from '@molecules/SearchBar'
import { useSession } from '@hooks/users/useSession'
import { useReadVideo } from '@hooks/videos/useReadVideo'
import { useReadPlaylist } from '@hooks/playlists/useReadPlaylist'
import { useKidPinSession } from '@hooks/users/useKidPinSession'

const VideoFeed = () => {

    const {loading, data: user, isError} = useSession()

    const [selectedPlaylist, setSelectedPlaylist] = useState('')

    const {loading:loadingKid, data:kid, isError:isErrorKid, logout} = useKidPinSession();

    const {loading:loadingReadVideo, data:dataReadVideos, isError:isErrorReadVideo, readVideos} = useReadVideo()
    const {loading:loadingReadPlaylist, data:dataReadPlaylists, isError:isErrorReadPlaylist, readPlaylists} = useReadPlaylist()

    useEffect(
        () => {
            if (user) {
                readPlaylists(user._id)
            }
        },
        []
      )
    
      useEffect(
        () => {
          if (selectedPlaylist) {
            readVideos(selectedPlaylist)
          }
        },
        [selectedPlaylist]
      )

    const onSearch = (query) => {
        readVideos(selectedPlaylist)
    }

    // Header and link manipulation
    const headerLinks = [
        { id: 1, title: "Logout" },
        ];

    const handleLinkClick = (linkId) => {
        if ( linkId === 1 ) {
            logout();
        }
    }

    const getEmbedUrl = (videoUrl) => {
        var videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        
        if (videoIdMatch && videoIdMatch[1]) {
            var videoId = videoIdMatch[1];
            var embedUrl = "https://www.youtube.com/embed/" + videoId;
            return embedUrl;
        } else {
            return null;
        }
    }

    return (
        <PrivateLayout headerLinks={headerLinks} onLinkClick={handleLinkClick}>
            <SearchBar onSearch={onSearch}/>
            <div id='playlist-buttons' >
                <ul>
                    {
                        dataReadPlaylists?.data?.map(playlist => {
                            <PlaylistButton selected={playlist.selected}>
                                {`${playlist.name} ${playlist.number}`}
                            </PlaylistButton>
                        })
                    }
                </ul>
            </div>
            <div className="page-content">
                    {
                        dataReadVideos?.data?.map(video => {
                            <div className='video-card'>
                                <h3>${video.name}</h3>
                                <iframe 
                                    src={`${getEmbedUrl(video.url)}?rel=0&modestbranding=1&loop=1`}
                                    title="${video.name}"
                                    frameBorder="0"
                                    allow="accelerometer; encrypted-media; gyroscope"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        })
                    }
            </div>
        </PrivateLayout>
    )
} 

export default VideoFeed