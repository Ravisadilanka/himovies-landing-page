import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
        <div className="logo">
            <img src="Images/nav-logo.png" alt="" />
        </div>
        <div className="nav-item-list">
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/movies">Movies</a>
                </li>
                <li>
                    <a href="/tv-shows">TV Shows</a>
                </li>
                <li>
                    <a href="/top-imdb">Top IMDB</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar