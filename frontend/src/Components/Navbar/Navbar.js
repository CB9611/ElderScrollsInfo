import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import siteLogo from '../Images/Ouroboros.png';

function Navbar() {

    /* Dropdown */
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => { setIsOpen(!isOpen); }

    return (
        <div className="nav-container">
            <div className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <div onClick={handleClick}>
                    <div className={isOpen ? "games-dropdown-open" : "games-dropdown-closed"}>
                        {isOpen ? '▲' : 'Games ▼'}
                    </div>
                    <div className={`games-dropdown-list ${isOpen ? "open" : ""}`}>
                        <div className="dropdown-divider" />
                        <Link className="nav-link" to="/Arena">Arena</Link>
                        <Link className="nav-link" to="/Daggerfall">Daggerfall</Link>
                        <Link className="nav-link" to="/Morrowind">Morrowind</Link>
                        <Link className="nav-link" to="/Oblivion">Oblivion</Link>
                        <Link className="nav-link" to="/Skyrim">Skyrim</Link>
                        <Link className="nav-link" to="/ElderScrollsOnline">Online</Link>
                        <div className="dropdown-divider" />
                        <Link className="nav-link" to="/Games">All Games</Link>
                    </div>
                </div>
                <Link className="nav-link" to="/About">About</Link>
                <Link className="nav-link" to="https://bethesda.net/" target="_blank" rel="noopener noreferrer">Bethesda</Link>
            </div>
        </div>
    )
}

export default Navbar;