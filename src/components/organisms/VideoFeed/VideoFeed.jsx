import React, { useState, useEffect } from 'react'

// Local imports
import PrivateLayout from '@layouts/PrivateLayout'
import PlaylistButton from '@atoms/PlaylistButton'
import SearchBar from '@src/components/molecules/SearchBar/SearchBar'
import { useSession } from '@hooks/users/useSession'
import { useReadVideo } from '@hooks/videos/useReadVideo'
import { useReadPlaylist } from '@hooks/playlists/useReadPlaylist'
import { useKidPinSession } from '@hooks/users/useKidPinSession'
import './VideoFeed.scss'
import '@components/scssGlobal/utils.scss'
import { useAuth } from '@src/contexts/authContext'

const VideoFeed = () => {

    const {user} = useAuth()
    const {logout} = useKidPinSession();

    const [kid, setKid] = useState(null) 

    const {loading:loadingReadVideo, data:dataReadVideos, isError:isErrorReadVideo, readVideos} = useReadVideo()
    const {loading:loadingReadPlaylist, data:dataReadPlaylists, isError:isErrorReadPlaylist, readPlaylists} = useReadPlaylist()

    const [selectedPlaylistId, setSelectedPlaylistId] = useState('')

    useEffect (
        () => {
            if (user) {
                readPlaylists(user._id)
            }  
        },
        [user]
    )

    useEffect(
        () => {
            const hasKid = localStorage.getItem('kid');
            if (user) {
                readPlaylists(user._id)
            }
            if (!kid ) {
                setKid( JSON.parse(hasKid) )
            }
        },
        []
      )

      useEffect(
        () => {
          if (dataReadPlaylists) {
            setSelectedPlaylistId(dataReadPlaylists[0]?._id);
          }
        },
        [dataReadPlaylists]
      )
    
      useEffect(
        () => {
          if (selectedPlaylistId) {
            readVideos(selectedPlaylistId)
          }
        },
        [selectedPlaylistId]
      )

    const onSearch = (query) => {
        readVideos(selectedPlaylistId)
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

    const handlePlaylistChange = ( {target: {value}} ) => {
        setSelectedPlaylistId(value)
      }

      console.log('videos read data', dataReadVideos)

    return (
        <PrivateLayout headerLinks={headerLinks} onLinkClick={handleLinkClick}>
            <SearchBar className="little" onSearch={onSearch}/>
            {/* <div id='playlist-buttons' >
                <ul>
                    {
                        dataReadPlaylists?.map(playlist => {
                            <PlaylistButton selected={playlist.selected}>
                                {`${playlist.name} ${playlist.number}`}
                            </PlaylistButton>
                        })
                    }
                </ul>
            </div> */}

            <form className="dropdown">
                <label htmlFor="playlist">Select Playlist:</label>
                <select className="input-form" id="playlist" name="playlist" onChange={handlePlaylistChange}>
                {
                    kid &&
                    dataReadPlaylists
                        ?.filter(
                            (playlist) => 
                            playlist.kids.find(
                                (item) => item._id === kid._id
                            )
                        )
                        .map((playlist) => (
                            <option key={playlist._id} value={playlist._id} >
                                {playlist.name}
                            </option>
                        ))
                }
                </select>
            </form>

            <div className="page-content">
                    {
                        dataReadVideos?.map(video => 
                            <div className='video-card' key={video._url}>
                                <h3>{video.name}</h3>
                                <iframe 
                                    src={`${getEmbedUrl(video.url)}?rel=0&modestbranding=1&loop=1`}
                                    title={video.name}
                                    allow="accelerometer; encrypted-media; gyroscope"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        )
                    }
            </div>
        </PrivateLayout>
    )
} 

export default VideoFeed