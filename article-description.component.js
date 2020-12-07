import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {BlogContext} from './blog-context';
import './article-description.css';

function Description(){
    // acquiring data from BlogContext component
    const data = useContext(BlogContext);

    useEffect(() => {
        // Some components scroll to the middle of the page
        window.scrollTo(0, 0); 
    }, []);

    // styling for a single post container
    // const style_post = {
    //     margin: '5% 2%',
    //     padding: '0.25em',
    //     height: '9.5em',
    //     borderRadius: '0.188em',
    //     boxShadow: '0 0.188em 1.550em -0.525em grey',
    //     color: '#313030',
    // }

    // styling for title and display image
    const style_content = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5em 0 0.5em 0'
    }

    const style_title = {
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        flex: '1'
    }

    // styling for the article brief
    const style_p = {
        fontSize: '0.85em',
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        width: '100%',
        color: '#29292e',
        margin: '0'
    }

    // style for the overall container
    const style_container = {
        margin: '7.75em 0'
    }

    return(
            <div className="outer-container" style={style_container}>
                
                {data.map((article, key) =>{
                    return (
                        <Link to={`/articles/single/${article._id}`} className="link" style={{textDecoration:'none'}} key={key} >
                            <div className="post-container">
                                <p style={{fontSize: '0.75em'}}>{article.category}</p>
                                <div style={style_content}>
                                    <h3 style={style_title}>{article.title}</h3>
                                    <div id="article-img" style={{ height: '3em', flex: '0.3'}}>article image</div>
                                </div>
                                <p style={style_p}>{article.content}</p>
                            </div>
                        </Link>
                    )
                })}
                
            </div>
    )
}

export default Description;