import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {BlogContext} from './blog-context';

function Description(){
    // acquiring data from BlogContext component
    const data = useContext(BlogContext);

    useEffect(() => {
        // Some components scroll to the middle of the page
        // window.scrollTo(0, 0);
        
    }, []);

    // styling for post
    const style_post = {
        position: 'relative',
        margin: '1.25em 0.5em',
        padding: '0.25em',
        height: '10em',
        borderRadius: '0.188em',
        boxShadow: '0 0.188em 1.550em -0.525em grey',
        color: '#313030',
        overflow: 'hidden'
    }

    const style_content = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5em 0 0.9em 0'
    }

    return(
            <div style={{margin: '8em 0'}}>
                
                {data.map((article, key) =>{
                    return (
                        <div style={style_post} key={key}>
                            <Link to={`/article/${article._id}`} style={{textDecoration:'none'}} key={article._id}>

                                <p style={{fontSize: '0.75em'}}>{article.category}</p>
                                <div style={style_content}>
                                    <h4 style={{ width: '70%', color: '#29292e' }}>{article.title}</h4>
                                    <div id="article-img" style={{ height: '100%' }}>article image</div>
                                </div>
                                <p style={{fontSize: '0.85em'}}>{article.content}</p>
                            </Link>
                        </div>
                    )
                })}
                
            </div>
    )
}

export default Description;