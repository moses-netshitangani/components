import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './article.css';

function FullArticle(){

    let [post, changePost] = useState({});

    useEffect(() => {
        // Some components scroll to the middle of the page
        window.scrollTo(0, 0);

        // Obtaining article id for display
        let id = window.location.href;
        id = id.substring(id.lastIndexOf("/") + 1);

        // fetch specific article using id
        axios.get(`http://localhost:3000/articles/single/${id}`)
            .then(res => {
                if(res !== undefined){
                    changePost(res.data);
                }
            })
            .catch(err => console.log(err));
        
    }, []);
    
    // styling
    const style_outer = {
        textAlign: 'center',
        marginTop: '6em',
        paddingTop: '0.5em',
        backgroundColor: 'white',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    }

    const style_heading = {
        textAlign: 'left',
        color: '#29292e',
        margin: '1em 0.25em',
        fontWeight: '900'
    }

    const style_text ={
        textAlign: 'left',
        padding: '1.25em 0.8em',
        whiteSpace: 'pre-line',
        lineHeight: '1.5em',
        color: 'rgb(75, 80, 80)'
    }

    return(
        <div style={style_outer}>

            <h2 style={style_heading}>{post.title}</h2>

            <div className='author-date'>
                <p><i>{`by ${post.author} / `}</i></p>
                <p><i>{post.date}</i></p>
            </div>

            <div className="article-img">   
            </div>
            
            <div>
                <p style={style_text}>{post.content}</p>
            </div>
        </div>
    )
}

export default FullArticle;