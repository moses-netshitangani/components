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
            console.log("entered updateBurgerBar func")
            setClasses("burger-bar x");
            // setMenu(!menu);
        }
        else {
            console.log("exited updateBurgerBar func")
            setClasses("burger-bar bars");
            // setMenu(!menu);
        }
    }

    const updateSlide = menu => {
        if(menu){
            console.log("entered updateSlide func")
            setSlideClasses("drawer long");
        }
        else{
            console.log("exited updateSlide func")
            setSlideClasses("drawer short");
        }
    }

    const updateMenu = () => {
        console.log("clicked burger-button with menu value of: "+menu);
        setMenu(menu = !menu);
        console.log("value of menu is now: "+menu);
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
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default Navbar;