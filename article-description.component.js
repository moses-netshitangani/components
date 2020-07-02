import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

function Description(){

    // Some components scroll to the middle of the page
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const style_post = {
        margin: '0.5em',
        padding: '0.25em',
        minHeight: '10em',
        borderRadius: '0.188em',
        WebkitBoxShadow: '0 0.188em 1.250em -0.625em grey',
        color: '#313030'
    }

    const style_content = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return(
        <Link to="/article" style={{textDecoration:'none'}}>
            <div style={{margin: '8em 0'}}>

                <div style={style_post}>
                    <p>News</p>
                    <div style={style_content}>
                        <h4 style={{ width: '70%', color: '#29292e' }}>COVID-19 PANDEMIC SOON TO END? MOST PROBABLY.</h4>
                        <div id="article-img" style={{ height: '100%' }}>article image</div>
                    </div>
                    <p>It has been speculated that the pandemic could be near it's end. People are almost too excited.</p>
                </div>
                
                <div style={style_post}>
                    <p>Sports</p>
                    <div style={style_content}>
                        <h4 style={{ width: '70%', color: '#29292e' }}>MANCHESTER CITY PLAYERS RETURN TO TRAINING.</h4>
                        <div id="article-img" style={{ height: '100%' }}>article image</div>
                    </div>
                    <p>Yup, the champions have returned to training. Following their UEFA ban, blah blah.</p>
                </div>
                
                <div style={style_post}>
                    <p>News</p>
                    <div style={style_content}>
                        <h4 style={{ width: '70%', color: '#29292e' }}>COVID-19 PANDEMIC SOON TO END? MOST PROBABLY.</h4>
                        <div id="article-img" style={{ height: '100%' }}>article image</div>
                    </div>
                    <p>It has been speculated that the pandemic could be near it's end. People are almost too excited.</p>
                </div>

                <div style={style_post}>
                    <p>News</p>
                    <div style={style_content}>
                        <h4 style={{ width: '70%', color: '#29292e' }}>POLICE BRUTALITY AGAINST BLACKS</h4>
                        <div id="article-img" style={{ height: '100%' }}>article image</div>
                    </div>
                    <p>It's not okay. Really isn't.</p>
                </div>
                
                <div style={style_post}>
                    <p>News</p>
                    <div style={style_content}>
                        <h4 style={{ width: '70%', color: '#29292e' }}>COVID-19 PANDEMIC SOON TO END? MOST PROBABLY.</h4>
                        <div id="article-img" style={{ height: '100%' }}>article image</div>
                    </div>
                    <p>It has been speculated that the pandemic could be near it's end. People are almost too excited.</p>
                </div>
                
                <div style={style_post}>
                    <p>News</p>
                    <div style={style_content}>
                        <h4 style={{ width: '70%', color: '#29292e' }}>COVID-19 PANDEMIC SOON TO END? MOST PROBABLY.</h4>
                        <div id="article-img" style={{ height: '100%' }}>article image</div>
                    </div>
                    <p>It has been speculated that the pandemic could be near it's end. People are almost too excited.</p>
                </div>
                
                <div style={style_post}>
                    <p>News</p>
                    <div style={style_content}>
                        <h4 style={{ width: '70%', color: '#29292e' }}>COVID-19 PANDEMIC SOON TO END? MOST PROBABLY.</h4>
                        <div id="article-img" style={{ height: '100%' }}>article image</div>
                    </div>
                    <p>It has been speculated that the pandemic could be near it's end. People are almost too excited.</p>
                </div>
            </div>
        </Link>
    )
}

export default Description;