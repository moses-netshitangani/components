import React from 'react';
import './footer.css';

const Footer = () => {

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
            </div>
        </div>
    )
}

export default Footer;