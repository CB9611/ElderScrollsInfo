import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <body className="footer-signup-banner">
                <form className="signup-form">
                    <input className="signup-text" type="text" placeholder="To sign up, type your email here" />
                    <button className="signup-submit" type="submit"><text className="submit-text">Submit</text></button>
                </form>
            </body>
            <body className="footer">
                <div className="footer-left">
                    <ul className="footer-list">
                        <Link className="footer-links" exact to="/">
                            <li className="footer-list-text">Home</li>
                        </Link>
                        <Link className="footer-links" to="/Games">
                            <li className="footer-list-text">Games</li>
                        </Link>
                        <Link className="footer-links" to="/About">
                            <li className="footer-list-text">About</li>
                        </Link>
                        <Link className="footer-links" to="/Daedric-Duel">
                            <li className="footer-list-text">Daedric Duel</li>
                        </Link>
                        <Link className="footer-links" to="/Darkmode-Test">
                            <li className="footer-list-text">Darkmode-Test</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer-divider" />
                <div className="footer-right">
                    <Link 
                        className="footer-links" 
                        to="https://bethesda.net/"
                        target="_blank" 
                        rel="noopener noreferrer">
                        <li className="footer-list-text">Bethesda's Website</li>
                    </Link>
                    <Link 
                        className="footer-links" 
                        to="https://react.dev/"
                        target="_blank" 
                        rel="noopener noreferrer">
                        <li className="footer-list-text">Made with React</li>
                    </Link>
                    <Link 
                        className="footer-links" 
                        to="https://chatgpt.com/"
                        target="_blank" 
                        rel="noopener noreferrer">
                        <li className="footer-list-text">Descriptions from ChatGPT</li>
                    </Link>
                    <Link 
                        className="footer-links" 
                        to="https://en.wikipedia.org/wiki/The_Elder_Scrolls"
                        target="_blank" 
                        rel="noopener noreferrer">
                        <li className="footer-list-text">Pictures & Info from Wikipedia</li>
                    </Link>
                </div>
            </body>
            <body className="footer-banner">
                <text className="copyright-text">2024 CB9611©</text>
            </body>
        </div>
    )
}

export default Footer;