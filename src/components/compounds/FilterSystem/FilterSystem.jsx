import React from 'react'
import SearchBar from '../../molecules/SearchBar/SearchBar'
import PlaylistButton from '../../atoms/PlaylistButton/PlaylistButton'

const FilterSystem = ({onSearch, playlists}) => {
  return (
    <>
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
    </>
  )
}

export default FilterSystem