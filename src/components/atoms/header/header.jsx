import React from 'react'

function Header() {
  return (
    <header className="nav">
        <div className="main-title">
            <h1 id="tube-logo big">Tube</h1>
            <h2 id="kids-logo big">Kids</h2>
        </div>
        <nav>
            <ul class="nav-links">
            <li><a className="alternative main-button nav-button" onclick="insertPin(0, true)">Enter as Admin</a></li>
            <li><a className="alternative main-button nav-button" onclick="logout()">Logout</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

