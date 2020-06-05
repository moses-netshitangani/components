import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

import Topics from './home-topics.component';

const Navbar = props => {
    let [menu, setMenu] = useState(false);
    const [burger_classes, setClasses] = useState("burger-bar");
    const [slide_classes, setSlideClasses] = useState("drawer");
    
    const updateBurgerBar = menu => {
        if (menu) {
            setClasses("burger-bar x");
        }
        else {
            setClasses("burger-bar bars");
        }
    }

    const updateSlide = menu => {
        if(menu){
            setSlideClasses("drawer long");
        }
        else{
            setSlideClasses("drawer short");
        }
    }

    const updateMenu = () => {
        setMenu(menu = !menu);
        updateBurgerBar(menu);
        updateSlide(menu);
    }

    return(
        <div style={{width: '100%'}}>
            <nav>
                <Link to="/">
                    <div className="logo">
                    </div>
                </Link>

                <div className="burger" onClick={updateMenu}>
                    <div className={burger_classes}></div>
                    <div className={burger_classes}></div>
                    <div className={burger_classes}></div>
                </div>
            </nav>
            <Topics />
            <div className={slide_classes}>
                <Link to="/" style={{textDecoration: 'none'}} onClick={updateMenu}>
                    <h4>Home</h4>
                </Link>
                <Link to="/admin" style={{textDecoration: 'none'}} onClick={updateMenu}>
                    <h4>Admin</h4>
                </Link>
                <Link to="/about" style={{textDecoration: 'none'}} onClick={updateMenu}>
                    <h4>About</h4>
                </Link>
                <Link to="/contact" style={{textDecoration: 'none'}} onClick={updateMenu}>
                    <h4>Contact</h4>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;