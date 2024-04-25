import React from 'react'
import classNames from 'classnames'

const PlaylistButton = ({children, selected, className = '',}) => {
    return (
        <li
            className={classNames('clickable', {alternative: selected}, className)}
        >
            {children}
        </li>
    )
}

export default PlaylistButton