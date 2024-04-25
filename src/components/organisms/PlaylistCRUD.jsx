import React, { useEffect, useState } from 'react'

import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";


// Local imports
import Button from '@atoms/Button'
import Submit from '@atoms/Submit'
import Input from '@atoms/Input'
import PopUp from '@molecules/PopUp'
import PlaylistForm from '@molecules/PlaylistForm'
import '@components/scssGlobal/cruds.scss'
import { useReadVideo } from '@hooks/videos/useReadVideo'
import { useUpdateVideo } from '@hooks/videos/useUpdateVideo'
import { useCreateVideo } from '@hooks/videos/useCreateVideo'
import { useDeleteVideo } from '@hooks/videos/useDeleteVideo'
import { useReadPlaylist } from '@hooks/playlists/useReadPlaylist'
import { useSession } from '@hooks/users/useSession'
import { useDeletePlaylist } from '@src/hooks/playlists/useDeletePlaylist';
import { useCreatePlaylist } from '@src/hooks/playlists/useCreatePlaylist';
import { useUpdatePlaylist } from '@src/hooks/playlists/useUpdatePlaylist';
import { useAuth } from '@src/contexts/authContext';


const PlaylistCRUD = () => {

  const {user, setUser} = useAuth()

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  const [videoToEdit, setVideoToEdit] = useState(null)
  const [playlistToEdit, setPlaylistToEdit] = useState(null)

  const [openForm, setOpenForm] = useState(false)

  const [selectedPlaylistId, setSelectedPlaylistId] = useState('')
  const [message, setMessage] = useState('Create video')

  const {loading:loadingDelete, data:dataDeleteVideo, isError:isErrorDelete, deleteVideo} = useDeleteVideo();
  const {loading:loadingCreate, data:dataCreateVideo, isError:isErrorCreate, createVideo} = useCreateVideo();
  const {loading:loadingUpdate, data:dataUpdateVideo, isError:isErrorUpdate, updateVideo} = useUpdateVideo();
  const {loading:loadingRead, data:dataReadVideos, isError:isErrorRead, readVideos} = useReadVideo();

  const {loading:loadingDeletePlaylist, data:dataDeletePlaylist, isError:isErrorDeletePlaylist, deletePlaylist} = useDeletePlaylist();
  const {loading:loadingCreatePlaylist, data:dataCreatePlaylist, isError:isErrorCreatePlaylist, createPlaylist} = useCreatePlaylist();
  const {loading:loadingUpdatePlaylist, data:dataUpdatePlaylist, isError:isErrorUpdatePlaylist, updatePlaylist} = useUpdatePlaylist();
  const {loading:loadingReadPlaylist, data:dataReadPlaylists, isError:isErrorReadPlaylist, readPlaylists} = useReadPlaylist();

  useEffect(
    () => {
      if (user)
      readPlaylists(user._id)
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

  useEffect(
    () => {
      if (dataUpdatePlaylist) {
        readPlaylists(user._id)
      }
    },
    [dataUpdatePlaylist]
  )

  useEffect(
    () => {
      if (dataDeletePlaylist) {
        readPlaylists(user._id)
      }
    },
    [dataDeletePlaylist]
  )
  useEffect(
    () => {
      if (dataCreatePlaylist) {
        readPlaylists(user._id)
      }
    },
    [dataCreatePlaylist]
  )


  useEffect(
    () => {
      if (dataUpdateVideo) {
        readVideos(selectedPlaylistId)
      }
    },
    [dataUpdateVideo]
  )

  useEffect(
    () => {
      if (dataDeleteVideo) {
        readVideos(selectedPlaylistId)
      }
    },
    [dataDeleteVideo]
  )
  useEffect(
    () => {
      if (dataCreateVideo) {
        readVideos(selectedPlaylistId)
      }
    },
    [dataCreateVideo]
  )


  const handlePlaylistChange = ( {target: {value}} ) => {
    setSelectedPlaylistId(value)
  }

  const handleClear = () => {
    setName('')
    setUrl('')
    setDescription('')
    setMessage('Create video')
    setVideoToEdit(null)
  }

  const startEditVideo = (video) => {
    setMessage('Edit video')
    setVideoToEdit(video)
    setName(video.name)
    setUrl(video.url)
    setDescription(video.description)
  }

  const startEditPlaylist = () => {
    const playlistToEdit = dataReadPlaylists.find(
      (playlist) =>  playlist._id === selectedPlaylistId)
    setPlaylistToEdit(playlistToEdit)
    setOpenForm(true)
  }

  const handlePlaylistDelete = () => {
    //Confirmation message
    deletePlaylist(selectedPlaylistId)

    setPlaylistToEdit(null)
    setOpenForm(false)
  }

  const handleVideoDelete = (videoId) => {
    // TODO Confirmation message
    setPlaylistToEdit(null)
    deleteVideo(selectedPlaylistId, videoId)
  }

  const handleSaveVideo = (e) => {
    e.preventDefault()
    if ( name && description && url.startsWith("https://www.youtube.com/") ) {
        if (videoToEdit) {
            updateVideo(selectedPlaylistId, {_id: videoToEdit._id, name, description, url})
        } else {
            createVideo(selectedPlaylistId, {name, description, url})
        }
        
        setVideoToEdit(null)
        handleClear()
    }
  }

  const handlePlaylistAddition = () => {
    setOpenForm(true)
    setPlaylistToEdit(null)
  }

  const handleOnSavePlaylist = ({name, selectedKids}) => {

    const kids = Object.entries(selectedKids)
    .filter(([_, isChecked]) => isChecked)
    .map(([kidId, _]) => kidId);

    if (name && kids) {
      if (playlistToEdit) {
        updatePlaylist({_id: selectedPlaylistId, name, kids})
      } else {
        createPlaylist({name, kids, userId: user._id})
      }

      setPlaylistToEdit(null)
      setOpenForm(false)
    }
  }

  console.log('videos', dataReadVideos)

  return (
    <section id="video-section">
      <h3>Playlists</h3>
      <form className="dropdown">
        <label htmlFor="playlist">Select Playlist:</label>
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
            selectedPlaylistId &&
            <>
              <Button 
                icon={<FaEdit />}
                onClick={startEditPlaylist}
                className='little'
              >
                Edit current Playlist
              </Button>

              <Button 
                icon={<MdDeleteForever />}
                onClick={handlePlaylistDelete}
                className='little'
              >
                Delete current Playlist
              </Button>
            </>
        }

        <Button
          icon={<IoMdAddCircle />}
          className='little'
          onClick={handlePlaylistAddition}
        >
            Add new Playlist
        </Button>

        {
          openForm &&

          <PopUp>
              <PlaylistForm
                playlistToEdit={playlistToEdit}
                goBack={
                  () => {
                    setPlaylistToEdit(null);
                    setOpenForm(false) 
                  } }
                onSave={handleOnSavePlaylist}
              />
          </PopUp>
        }
      </div>

      <div className="table-form-combo">

        <table className="table" id="videos">
          <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Description</th>
                <th>Modify</th>
            </tr>
          </thead>
          <tbody id="video-table">
            {
              dataReadVideos?.map((video) =>
                <tr key={video._id}>
                  <td>{video.name}</td>
                  <td>{video.url}</td>
                  <td>{video.description}</td>
                  <td>
                    <Button icon={<FaEdit />} onClick={() => startEditVideo(video)}></Button>
                    <Button icon={<MdDeleteForever />} onClick={() => handleVideoDelete(video._id)}></Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>

        <div className="crud-new">
          <h2 id="video-form-title">Video Manager</h2>
          <form action="" id="submit-video-changes" onSubmit={handleSaveVideo}>
            <Input
                id="video-name" placeholder="Name of the video"
                required 
                value={name} 
                onChange={setName}
            />
            <Input
                id="video-description" placeholder="Description of the video"
                required 
                value={description} 
                onChange={setDescription}
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