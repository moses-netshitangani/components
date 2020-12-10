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

    return(
        <div className="article-outer-container">

            <h1 className="heading">{post.title}</h1>

            <div className='author-date'>
                <p><i>{post.author === undefined ? '': `by ${post.author} /`}</i></p>
                <p><i>{post.date === undefined ? '': `${post.date}`}</i></p>
            </div>

            <div className="article-img">   
            </div>
            
            <div>
                <p className="full-content">{post.content}</p>
            </div>
        </div>
    )
}

export default FullArticle;