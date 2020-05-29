import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Navbar(){
    const [menu, setMenu] = useState(false);
    const updateMenu = () => {
        setMenu(!menu);
    }
    
    let style_menu = {
        display: menu ? 'flex' : 'none',
        borderRadius: '5px',
        background: 'linear-gradient(to right, #cf2f50, #f27242)',
        flexDirection: 'column',
        width: '50%',
        height: '283px',
        paddingTop: '55px',
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: '1'
    }

    return(
        <nav>
            <Link to="/">
                <div className="logo">
                </div>
            </Link>
            <a className="burger" onClick={updateMenu}>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
            </a>
            <div className='openMenu' style={style_menu}>
                <a href="" style={{borderTop:'1px solid black'}}><h4>Home</h4></a>
                <a href=""><h4>About</h4></a>
                <a href=""><h4>Contact</h4></a>
            </div>
        </nav>
    )
}

export default Navbar;