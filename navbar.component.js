import React from 'react';
import '../App.css';

function Navbar(){
    // let menu_pressed = false;

    return(
        <nav>
            <div className="logo">
            </div>
            <div className="burger">
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
            </div>
        </nav>
    )
}

export default Navbar;