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

    const style_link = {
        textDecoration: 'none'
    }

    return(
        <nav>
            <Link to="/">
                <div className="logo">
                </div>
            </Link>
            <div className="burger" onClick={updateMenu}>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
            </div>
            <div className='openMenu' style={style_menu}>
                <Link to="/" style={style_link}>
                    <h4 style={{ borderTop: '1px solid black' }}>Home</h4>
                </Link>
                <Link to="/about" style={style_link}>
                    <h4>About</h4>
                </Link>
                <Link to="/contact" style={style_link}>
                    <h4>Contact</h4>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;