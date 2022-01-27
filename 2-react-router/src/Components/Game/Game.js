import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Game() {
    return (
        <div>
            <h1>Liste de jeux</h1>
            <nav>
                <Link to="/game/pendu">pendu</Link>
                <Link to="/game/morpion">morpion</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
