import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import siteLogo from '../Images/Ouroboros.png';

function Navbar() {
    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="left-nav-items">
                    <div className="nav-items">
                        <Link className="links" to="/">
                            <div className="nav-link">Home</div>
                        </Link>
                    </div>
                    <div className="nav-items">
                        <Link className="links" to="/Games">
                            <div className="nav-link">Games</div>
                        </Link>
                    </div>
                </div>
                <div className="navbarLogo">
                    <Link className="siteLogo-Link" title="You are Dovah" exact to="/">
                        <img className="siteLogo-img" src={ siteLogo }></img>
                    </Link>
                </div>
                <div className="right-nav-items">
                    <div className="nav-items">
                        <Link className="links" to="/About">
                            <div className="nav-link">About</div>
                        </Link>
                    </div>
                    <div className="nav-items">
                        <Link className="links" to="/MadeWithReact">
                            <div className="nav-link">Made with React!</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;