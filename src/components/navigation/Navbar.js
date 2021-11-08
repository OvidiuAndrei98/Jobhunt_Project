import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="logo">lancefy</div>
                <ul>
                    <li>Find Talent</li>
                    <li>Find Work</li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li>Register</li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar
