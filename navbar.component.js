import React from 'react';
import '../App.css';

function Navbar(){
    return(
        <nav>
            <div className="logo">
                Vasco Media logo would go here
            </div>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;