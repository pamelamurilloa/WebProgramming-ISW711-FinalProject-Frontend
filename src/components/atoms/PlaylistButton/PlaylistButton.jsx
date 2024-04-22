import React from 'react'
import classNames from 'classnames'

const PlaylistButton = ({children, selected}) => {
    return (
        <li className={classNames('clickable', {alternative: selected})}>{children}</li>
    )
}

export default PlaylistButton