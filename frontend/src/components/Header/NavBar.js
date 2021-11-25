import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

import AuthContext from '../../store/auth-context'


const Navbar = () => {

    const authCtx = useContext(AuthContext)

    const isLoggedIn = authCtx.isLoggedIn
    const logoutHandler = () => {
        authCtx.logout()
    }

    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/matches">Matches</NavLink></li>
                    <li><NavLink to="/players">Players</NavLink></li>
                    {isLoggedIn ? <li><button onClick={logoutHandler}>Logout</button></li>
                        : <li><NavLink to="/user/login">Login</NavLink></li>}
                </ul >
            </nav >
        </div >
    )
}

export default Navbar



