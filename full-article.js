import React, {useEffect, useState, useContext} from 'react';
import {BlogContext} from './blog-context';
import './article.css';

function FullArticle(){
    // acquiring data from BlogContext component
    const data = useContext(BlogContext);
    let [post, changePost] = useState([]);

    useEffect(() => {
        // Some components scroll to the middle of the page
        window.scrollTo(0, 0);

        // Obtaining article id for display
        let id = window.location.href;
        id = id.substring(id.lastIndexOf("/") + 1);

        // searching data for article matching id
        let match = data.filter(article => {
            return article._id === id;
        });
        changePost(match);
        
    }, []);
    
    // styling
    const style_outer = {
        textAlign: 'center',
        marginTop: '7em'
    }

    const style_heading = {
        color: '#29292e',
        margin: '1em 0'
    }

    const style_text ={
        textAlign: 'justify',
        padding: '1.25em 0.75em'
    }

    return(
        <div style={style_outer}>
            <h2 style={style_heading}>{post.length ? post[0].title : ''}</h2>
            <div className="article-img">
                This is where the article image will go.
            </div>
            <div className='author-date'>
                <p><i>{post.length ? `by ${post[0].author}` : ''}</i></p>
                <p><i>{post.length ? post[0].date : ''}</i></p>
            </div>
            <div>
                <p style={style_text}>
                    {post.length ? post[0].content : 'Refresh page'}
                </p>
            </div>
        </div>
    )
}

export default FullArticle;