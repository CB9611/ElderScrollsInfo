import React  from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Navdrop from './Navdrop.js';

function Navbar() {

    return (
        <div className="nav-container">
            <nav className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <Navdrop />
                <Link className="nav-link" to="/About">About</Link>
                <Link
                    className="nav-link" 
                    to="https://bethesda.net/" 
                    target="_blank" 
                    rel=" noreferrer noopener"
                >Bethesda</Link>
            </nav>
        </div>
    )
}

export default Navbar;