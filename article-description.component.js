import React from 'react';
import {Link} from 'react-router-dom';

function Description(){

    const style_post = {
        margin: '0.5em',
        padding: '0.25em',
        borderRadius: '3px',
        WebkitBoxShadow: '0 3px 20px -10px grey',
    }

    const style_content = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return(
        <Link to="/article" style={{textDecoration:'none'}}>
            <div style={style_post}>
                <p>News</p>
                <div style={style_content}>
                    <h4 style={{ width: '70%', color:'#29292e'}}>COVID-19 PANDEMIC SOON TO END? MOST PROBABLY.</h4>
                    <div id="article-img" style={{height: '100%'}}>article image</div>
                </div>
                <p>It has been speculated that the pandemic could be near it's end. People are almost too excited.</p>
            </div>
        </Link>
    )
}

export default Description;