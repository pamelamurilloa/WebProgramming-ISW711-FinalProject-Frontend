import React from 'react'

// Local imports
import PrivateLayout from '../layouts/PrivateLayout'
import useVideos from '../../../hooks/useVideos'
import PlaylistButton from '../atoms/PlaylistButton'
import { useReadVideo } from '../../../hooks/videos/useReadVideo'
import { useReadPlaylist } from '../../../hooks/playlists/useReadPlaylist'

const VideoFeed = () => {

    const [selectedPlaylist, setSelectedPlaylist] = useState('')

    const {loading:loadingReadVideo, data:dataReadVideos, isError:isErrorReadVideo, readVideos} = useReadVideo()
    const {loading:loadingReadPlaylist, data:dataReadPlaylists, isError:isErrorReadPlaylist, readPlaylists} = useReadPlaylist()

    useEffect(
        () => {
          readPlaylists()
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
        readVideos(selectedPlaylist, query)
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
        <PrivateLayout>
            <SearchBar onSearch={onSearch}/>
            <div id='playlist-buttons' >
                <ul>
                    {
                        playlists?.map(playlist => {
                            <PlaylistButton selected={playlist.selected}>
                                {`${playlist.name} ${playlist.number}`}
                            </PlaylistButton>
                        })
                    }
                </ul>
            </div>
            <div class="page-content">
                    {
                        selectedPlaylist.map(video => {
                            <div className='video-card'>
                                <h3>${video.name}</h3>
                                <iframe 
                                    src={`${getEmbedUrl(video.url)}?rel=0&modestbranding=1&loop=1`}
                                    title="${video.name}"
                                    frameborder="0"
                                    allow="accelerometer; encrypted-media; gyroscope"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        })
                    }
            </div>
        </PrivateLayout>
    )
}

export default VideoFeed