import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function navbar() {
    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="nav-items">
                    <button className="nav-link">Home</button>
                </div>
                <div className="nav-items">
                    <button className="nav-link">Apps</button>
                </div>
                <div className="nav-items">
                    <button className="nav-link">About</button>
                </div>
                <div className="nav-items">
                    <button className="nav-link">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default navbar;