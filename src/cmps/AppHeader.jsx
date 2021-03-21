import React from 'react'
import { NavLink } from 'react-router-dom'
// import {} from '../assets/imgs/logo.svg'

export function AppHeader() {
    return (
        <header className="flex space-between main-layout">
           <div className="flex space-between">

            <div className="logo"></div>

            <ul className="clear-list links flex">
                <li><NavLink to="/"> Prodact  </NavLink></li>
                <li><NavLink to="/company">Company  </NavLink></li>
                <li><NavLink to="/connect">Connect  </NavLink></li>
            </ul>
           </div>

            <div className="flex btn-container">
                <button className="header-btn">Login</button>
                <button className="primary-btn CTA">Sign Up</button>

            </div>
        </header >

    )
}
