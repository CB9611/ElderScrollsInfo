import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import siteLogo from '../Images/Ouroboros.png';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const [navburgerOpen, setNavburgerOpen] = useState(false);

    const toggleNavburger = () => {
        setNavburgerOpen(!navburgerOpen)
    }

    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="left-nav-items">
                    <div className="">
                        <Link className="links" to="/">
                            <div className="nav-link">Home</div>
                        </Link>
                    </div>
                    <div 
                        className="games-dropdown-container"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={isOpen ? "games-dropdown-open" : "games-dropdown-closed"}>
                            {isOpen ? '▲' : 'Games ▼'}
                        </div>
                        {isOpen && /* DROPDOWN MENU START */ (
                            <div className="games-dropdown-list">
                                <Link className="links" to="/Arena">
                                    <div className="nav-link">Arena</div>
                                </Link>
                                <Link className="links" to="/Daggerfall">
                                    <div className="nav-link">Daggerfall</div>
                                </Link>
                                <Link className="links" to="/Morrowind">
                                    <div className="nav-link">Morrowind</div>
                                </Link>
                                <Link className="links" to="/Oblivion">
                                    <div className="nav-link">Oblivion</div>
                                </Link>
                                <Link className="links" to="/Skyrim">
                                    <div className="nav-link">Skyrim</div>
                                </Link>
                                <Link className="links" to="/ElderScrollsOnline">
                                    <div className="nav-link">Online</div>
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="links" to="/Games">
                                    <div className="nav-link">All Games</div>
                                </Link>
                            </div>
                        ) /* DROPDOWN MENU END */ }
                    </div>
                </div>
                <div className="navbarLogo">
                    <Link className="siteLogo-Link" title="You are Dovah" exact to="/">
                        <img className="siteLogo-img" src={ siteLogo } alt=""></img>
                    </Link>
                </div>
                <div className="right-nav-items">
                    <div className="nav-items">
                        <Link className="links" to="/About">
                            <div className="nav-link">About</div>
                        </Link>
                    </div>
                    <div className="nav-items">
                        <Link 
                            className="links" 
                            to="https://bethesda.net/"
                            target="_blank" 
                            rel="noopener noreferrer">
                            <div className="nav-link">Bethesda</div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="navbar-mobile-container">
                <div className={navburgerOpen ? "nav-mobileClosed" : "nav-mobileOpen"}>
                    <ul>
                        <Link className="links" to="/">
                            <div className="nav-link">Home</div>
                        </Link>
                        <div 
                            className="games-dropdown-container"
                            onClick={handleClick}
                        >
                        <div className={isOpen ? "games-dropdown-open" : "games-dropdown-closed"}>
                            {isOpen ? '▲' : 'Games ▼'}
                        </div>
                        {isOpen && /* DROPDOWN MENU START */ (
                            <div className="games-dropdown-list">
                                <Link className="links" to="/Arena">
                                    <div className="nav-link">Arena</div>
                                </Link>
                                <Link className="links" to="/Daggerfall">
                                    <div className="nav-link">Daggerfall</div>
                                </Link>
                                <Link className="links" to="/Morrowind">
                                    <div className="nav-link">Morrowind</div>
                                </Link>
                                <Link className="links" to="/Oblivion">
                                    <div className="nav-link">Oblivion</div>
                                </Link>
                                <Link className="links" to="/Skyrim">
                                    <div className="nav-link">Skyrim</div>
                                </Link>
                                <Link className="links" to="/ElderScrollsOnline">
                                    <div className="nav-link">Online</div>
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="links" to="/Games">
                                    <div className="nav-link">All Games</div>
                                </Link>
                            </div>
                        ) /* DROPDOWN MENU END */ }
                        </div>
                        <Link className="links" to="/About">
                            <div className="nav-link">About</div>
                        </Link>
                        <Link 
                            className="links" 
                            to="https://bethesda.net/"
                            target="_blank" 
                            rel="noopener noreferrer">
                            <div className="nav-link">Bethesda</div>
                        </Link>
                    </ul>
                </div>
                <div className="navburger-container" onClick={toggleNavburger}>
                    <div className="nav-hamburger" isOpen={navburgerOpen}>
                        <div className="burger burgerTop" />
                        <div className="burger burgerMid" />
                        <div className="burger burgerBot" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;