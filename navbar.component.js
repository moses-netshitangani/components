import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = props => {
    // menu variable to hold state for the burger-bar
    let [menu, setMenu] = useState(false);

    // classes for different css animations of the burger-menu
    const [burger_classes, setClasses] = useState("burger-bar");
    const [slide_classes, setSlideClasses] = useState("drawer");
    
    // switch burger-menu classes when clicked
    const updateBurgerBar = menu => {
        if (menu) {
            setClasses("burger-bar x");
        }
        else {
            setClasses("burger-bar bars");
        }
    }

    // switch slide classes when clicked
    const updateSlide = menu => {
        if(menu){
            setSlideClasses("drawer long");
        }
        else{
            setSlideClasses("drawer short");
        }
    }

    // the onclick method
    const updateMenu = () => {
        setMenu(menu = !menu);
        updateBurgerBar(menu);
        updateSlide(menu);
    }

    return(
        <div style={{width: '100%'}}>
            {/* The navbar with the burger-menu */}
            <div className='nav-container'>
                <nav>
                    <div className='logo-cover'>
                        <Link to="/">
                            <div className="logo"></div>
                        </Link> 
                    </div>
                    

                    <div className="burger" onClick={updateMenu}>
                        <div className={burger_classes}></div>
                        <div className={burger_classes}></div>
                        <div className={burger_classes}></div>
                    </div>
                </nav>
                {/* home topics */}
                <div className='topic-outer'>
                    <div className='topic-parent'>
                        {/* ADD MARGIN 0 AUTO TO THE LINKS TO SEE IF THEY ALIGN */}
                        <Link to='/topic/News'>
                            <h4 id='topic-child'>News</h4>
                        </Link>
                        <Link to='/topic/Lifestyle'>
                            <h4 id='topic-child'>Lifestyle</h4>
                        </Link>
                        <Link to='/topic/Fashion'>
                            <h4 id='topic-child'>Fashion</h4>   
                        </Link>
                    </div>
                </div>

            </div>

            {/* The content when burger-menu is clicked */}
            <div className={slide_classes}>
                <Link to="/" onClick={updateMenu}>
                    <h4>Home</h4>
                </Link>
                <Link to="/admin" onClick={updateMenu}>
                    <h4>Admin</h4>
                </Link>
                <Link to="/about" onClick={updateMenu}>
                    <h4>About Me</h4>
                </Link>
                <Link to="/contact" onClick={updateMenu}>
                    <h4>Contact</h4>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;