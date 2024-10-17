import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import siteLogo from '../Images/Ouroboros.png';

function Navbar() {

    /* Dropdown */
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const handleClick = () => { setIsOpen(!isOpen); }

    /* v v v Closes dropdown when clicking elsewhere v v v */
    const handClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handClickOutside);
        return () => {
            document.removeEventListener('mousedown', handClickOutside);
        };
    }, []);
    /* ^ ^ ^ Closes dropdown when clicking elsewhere ^ ^ ^ */

    return (
        <div className="nav-container">
            <div className="navbar">
                <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <div className="nav-dropdown-container" ref={dropdownRef}>
                    <button className={isOpen ? "games-dropdown-open" : "games-dropdown-closed"} onClick={handleClick}>
                        {isOpen ? '▲' : 'Games ▼'}
                    </button>
                    <div className={`games-dropdown-list ${isOpen ? "open" : ""}`}>
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
                <Link 
                    className="nav-logo-link"
                    to="/" 
                    title="Return home Dovahkiin"
                    onClick={() => setIsOpen(false)}>
                    <img className="nav-logo" src={ siteLogo } alt="" />
                </Link>
                <Link className="nav-link" to="/About" onClick={() => setIsOpen(false)}>About</Link>
                <Link 
                    className="nav-link" 
                    to="https://bethesda.net/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => setIsOpen(false)}
                >Bethesda</Link>
            </div>
        </div>
    )
}

export default Navbar;