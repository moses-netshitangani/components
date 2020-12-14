import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {

    // scroll back to the top of the page
    const scrollBack = () => {
        window.scrollTo(0, 0);
    }

    return(
        <div className="footer-container">
            <div className="footer-logo img"></div>
            <div className="social-icons">
                <div className="insta img"></div>
                <div className="twitter img"></div>
                <div className="email img"></div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2021 Vasco Media</p>
                <p>All Rights Reserved</p>
                <p><Link to="/about" onClick={scrollBack}>About Me</Link></p>
            </div>
        </div>
    )
}

export default Footer;