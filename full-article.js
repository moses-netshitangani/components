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
        id = id.substring(id.lastIndexOf("/")+1);

        // searching data for article matching id
        let match = data.filter(article => {
            return article._id === id;
        });
        changePost(match);
        
    }, []);

    console.log(post.title);
    
    // styling
    const style_outer = {
        textAlign: 'center',
        marginTop: '7em'
    }

    const style_heading = {
        color: '#29292e'
    }

    const style_text ={
        textAlign: 'justify',
        padding: '1em'
    }

    return(
        <div style={style_outer}>
            <h1 style={style_heading}>hey</h1>
            <div className="article-img">
                This is where the article image will go.
            </div>
            <div>
                <p style={style_text}>
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                </p>
            </div>
        </div>
    )
}

export default FullArticle;