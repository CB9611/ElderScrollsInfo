import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <body className="footer">
                <div className="footer-left">
                    <ul>
                        <Link className="footer-links-list" exact to="/">
                            <div className="footer-link-item">Home</div>
                        </Link>
                        <Link className="footer-links-list" to="/Games">
                            <div className="footer-link-item">Games</div>
                        </Link>
                        <Link className="footer-links-list" to="/About">
                            <div className="footer-link-item">About</div>
                        </Link>
                        <Link 
                            className="footer-links-list" 
                            to="https://react.dev/"
                            target="_blank" 
                            rel="noopener noreferrer">
                                <div className="footer-link-item">Made with React!</div>
                        </Link>
                    </ul>
                </div>
                <div className="footer-divider" />
                <div className="footer-links">
                    <Link 
                        className="external-links" 
                        to="https://bethesda.net/"
                        target="_blank" 
                        rel="noopener noreferrer">
                            Bethesda's Website
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