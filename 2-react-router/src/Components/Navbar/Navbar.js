import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    
    const classActiveLink = ({isActive})=> isActive ? "activeLink" : ""
    
    return (
        <nav>
            <NavLink to="/" className={classActiveLink} >Acceuil</NavLink>
            <NavLink to="/services" className={classActiveLink} >Services</NavLink>
            <NavLink to="/contact" className={classActiveLink} >Contact</NavLink>
            <NavLink to="/game" className={classActiveLink} >Game</NavLink>
            <NavLink to="/statistique" className={classActiveLink} >Statistique</NavLink>
            <NavLink to="/timer" className={classActiveLink} >Timer</NavLink>
        </nav>
    )
}
