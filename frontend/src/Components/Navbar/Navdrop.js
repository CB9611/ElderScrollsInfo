import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navdrop() {

    /* Dropdown */
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const handleClick = () => { setIsOpen(!isOpen); }

    /* v v v Closes dropdown when clicking elsewhere v v v */
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    /* ^ ^ ^ Closes dropdown when clicking elsewhere ^ ^ ^ */

    return (
        <div className={`nav-dropdown-container ${isOpen ? "open" : ""}`} ref={dropdownRef}>
            <button 
                className={isOpen ? "games-dropdown-open" : "games-dropdown-closed"} 
                onClick={handleClick}
                aria-expanded={isOpen}
                aria-controls="games-dropdown-list"
            >
                {isOpen ? '▲' : 'Games ▼'}
            </button>
            {isOpen && (
                <ul className="games-dropdown-list" id="games-dropdown-list">
                    <Link className="nav-link" to="/Arena">Arena</Link>
                    <Link className="nav-link" to="/Daggerfall">Daggerfall</Link>
                    <Link className="nav-link" to="/Morrowind">Morrowind</Link>
                    <Link className="nav-link" to="/Oblivion">Oblivion</Link>
                    <Link className="nav-link" to="/Skyrim">Skyrim</Link>
                    <Link className="nav-link" to="/ElderScrollsOnline">Online</Link>
                    <div className="dropdown-divider" />
                    <Link className="nav-link" to="/Games">All Games</Link>
                </ul>
            )}
        </div>
    )
}

export default Navdrop;