import React, { useEffect, useState } from 'react'

import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

// Local imports
import { useReadVideo } from '../../../hooks/videos/useReadVideo'
import { useUpdateVideo } from '../../../hooks/videos/useUpdateVideo'
import { useCreateVideo } from '../../../hooks/videos/useCreateVideo'
import { useDeleteVideo } from '../../../hooks/videos/useDeleteVideo'
import { useReadPlaylist } from '../../../hooks/playlists/useReadPlaylist'

const PlaylistCRUD = () => {

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  const [videoToEdit, setVideoToEdit] = useState(null)
  const [playlistToEdit, setPlaylistoToEdit] = useState(null)


  const [selectedPlaylist, setSelectedPlaylist] = useState('')
  const [message, setMessage] = useState('Create video')

  const {loading:loadingDelete, data:dataDelete, isError:isErrorDelete, deleteVideo} = useDeleteVideo();
  const {loading:loadingCreate, data:dataCreate, isError:isErrorCreate, createVideo} = useCreateVideo();
  const {loading:loadingUpdate, data:dataUpdate, isError:isErrorUpdate, updateVideo} = useUpdateVideo();
  const {loading:loadingRead, data:dataReadVideos, isError:isErrorRead, readVideos} = useReadVideo();

  const {loading:loadingReadPlaylist, data:dataReadPlaylists, isError:isErrorReadPlaylist, readPlaylists} = useReadPlaylist();

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

  const handlePlaylistChange = ( {target: {value}} ) => {
    setSelectedPlaylist(value)
  }

  const handleClear = () => {
    setName('')
    setUrl('')
    setMessage('Create video')
    setVideoToEdit(null)
  }

  const handleDeleteVideo = (videoId) => {
    //Confirmation message
    deleteVideo(selectedPlaylist, videoId)
  }

  const startEditVideo = (video) => {
    setMessage('Edit video')
    setVideoToEdit(video)
    setName(video.name)
    setUrl(video.url)
  }

  const handleSavevideo = (video) => {
    if ( video.name && video.url.startsWith("https://www.youtube.com/") ) {
        if (videoToEdit) {
            updateVideo(video)
        } else {
            createVideo(video)
        }
        
        setVideoToEdit(null)
        handleClear()
    }
}

  return (
    <section id="video-section">
      <h3>Playlists</h3>
      <form className="dropdown" onSubmit={handlePlaylistChange}>
        <label for="playlist">Select Playlist:</label>
        <select className="input-form" id="playlist" name="playlist" onChange={handlePlaylistChange}>
          {
            dataReadPlaylists?.map((playlist) => (
              <option key={playlist._id} value={playlist._id} >
                {playlist.name}
              </option>
            ))
          }
        </select>
      </form>

      <div className='playlist-crud'>

        {
          <>
            {selectedPlaylist} &&

            <Button 
              icon={<FaEdit />}
              onClick="startPlaylistEdit"
            >
              Edit current Playlist
            </Button>

            <Button 
              icon={<MdDeleteForever />}
              onClick="handlePlaylistDelete"
            >
              Delete current Playlist
            </Button>
          </>
        }

        <Button
          icon={<IoMdAddCircle />}
          onClick="handlePlaylistAddition"
        >
            Add new Playlist
        </Button>

        {
          playlistToEdit &&

          <PopUp>
              <PlaylistForm />
          </PopUp>
        }
      </div>

      <div className="table-form-combo">

        <table className="table" id="videos">
          <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Modify</th>
            </tr>
          </thead>
          <tbody id="video-table">
            {
              dataReadVideos?.map((video) => {
                <tr key={video._id}>
                  <td>{video.name}</td>
                  <td>{video.url}</td>
                  <td>
                    <Button icon={<FaEdit />} onClick={() => startEditVideo(video)}>Edit</Button>
                    <Button icon={<MdDeleteForever />} onClick={() => handleDeleteVideo(video._id)}>Delete</Button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>

        <div className="crud-new">
          <h2 id="video-form-title">Add new video</h2>
          <form action="" id="submit-video-changes" onSubmit={() => handleSavevideo({name, url})}>
            <Input
                id="video-name" placeholder="Name of the video"
                required 
                value={name} 
                onChange={setName}
            />
            <Input
                id="video-url" placeholder="URL of the video"
                required 
                value={url} 
                onChange={setUrl}
            />

            <Submit>{message}</Submit>
            <Button onClick={handleClear}>Clear view</Button>
          </form>
        </div>

      </div>
    </section>   
  )
}


export default PlaylistCRUD