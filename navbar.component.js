import React, {useState} from 'react';
import '../App.css';

function Navbar(){
    const [menu, setMenu] = useState(false);

    const updateMenu = () => {
        setMenu(!menu);
        if(menu){

        }
    }
    
    return(
        <nav>
            <div className="logo">
            </div>
            <a className="burger" onClick={updateMenu}>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
            </a>
            <div className='openMenu'>
                <a href=""><h4>Home</h4></a>
                <a href=""><h4>About</h4></a>
                <a href=""><h4>Contact</h4></a>
            </div>
        </nav>
    )
}

export default Navbar;