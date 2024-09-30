import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
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
                        <Link 
                            className="footer-links" 
                            to="https://react.dev/"
                            target="_blank" 
                            rel="noopener noreferrer">
                            <li className="footer-list-text">Made with React!</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer-divider" />
                <div className="footer-middle">
                    <Link 
                        className="footer-links" 
                        to="https://bethesda.net/"
                        target="_blank" 
                        rel="noopener noreferrer">
                        <li className="footer-list-text">Bethesda's Website</li>
                    </Link>
                </div>
                <div className="footer-divider" />
                <div className="footer-signup">
                    <form className="signup-form">
                        <input className="signup-text" type="text" placeholder="Sign up today!" />
                        <button className="signup-submit" type="submit">Submit</button>
                    </form>
                </div>
            </body>
        </div>
    )
}

export default Footer;