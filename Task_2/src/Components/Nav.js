import React from 'react'
import './Nav.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
            <div className="max-width">
                <span className="logo">Grow More Services</span>
                <button onClick={getData}>Get Users</button>
            </div>
        </nav>
    )
}