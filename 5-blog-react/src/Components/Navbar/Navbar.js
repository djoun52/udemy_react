import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    } 

    useEffect(() => {
        const changeWidth = () =>{
            setLargeur(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    return (
        <nav>
            {(toggleMenu || largeur > 500) &&(
                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Ecrire</li>
                    <li className="items">Contacts</li>
                </ul>
            )}
            <button 
            onClick={toggleNav}
            className="btn">BTN</button>
        </nav>
    )
}
