import React from 'react'
import './Header.scss';

const Header = ({links, onLinkClick }) => {
  return (
    <header className="nav">
        <div className="main-title">
            <h1 id="tube-logo big">Tube</h1>
            <h2 id="kids-logo big">Kids</h2>
        </div>
        <nav>
            <ul className="nav-links">
              {
                links?.map(link => 
                  <li key={link.id}>
                    <a
                      className="alternative main-button nav-button"
                      onClick={() => onLinkClick(link.id)}
                    >
                      {link.title}
                    </a>
                  </li>
                )
              }
            </ul>
        </nav>
    </header>
  )
}

export default Header

