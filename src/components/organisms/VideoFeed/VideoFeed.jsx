import React, { useState, useEffect, useMemo } from 'react'

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
    const [query, setQuery] = useState('') 

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


    const filteredVideos = useMemo(
        () => {
            if (!query) {
                return dataReadVideos
            } else {
                const formatedQuery = query.toLowerCase()
                return dataReadVideos
                    .filter(
                        (video) => 
                        video.name.toLowerCase().includes( formatedQuery )
                     || video.description.toLowerCase().includes( formatedQuery )
            ) 
            }
        },
        [query, dataReadVideos]
    );

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

    return (
        <PrivateLayout headerLinks={headerLinks} onLinkClick={handleLinkClick}>
            <SearchBar className="little" onSearch={setQuery}/>

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

            {
                query &&
                <h2>Filtered by: {query}</h2>
            }
            <div className="page-content">

                    {
                        filteredVideos?.map(video => 
                            <div className='video-card' key={video._url}>
                                <h3>{video.name}</h3>
                                <iframe 
                                    src={`${getEmbedUrl(video.url)}?rel=0&modestbranding=1&loop=1`}
                                    title={video.name}
                                    allow="accelerometer; encrypted-media; gyroscope"
                                    allowFullScreen>
                                </iframe>
                                <p>{video.description}</p>
                            </div>
                        )
                    }
            </div>
        </PrivateLayout>
    )
} 

export default VideoFeed