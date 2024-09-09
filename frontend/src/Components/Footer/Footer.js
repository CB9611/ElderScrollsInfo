import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import ParagraphFooter from './ParagraphFooter.jsx';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="paragraph-footer">
                    <ParagraphFooter />
                </div>
                <div className="footer-links">

                </div>
            </div>
        </div>
    )
}

export default Footer;