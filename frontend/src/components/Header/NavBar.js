import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'


const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/matches">Matches</NavLink></li>
                    <li><NavLink to="/players">Players</NavLink></li>
                </ul >
            </nav >
        </div >
    )
}

export default Navbar



