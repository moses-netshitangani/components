import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios');

function Description(){

    useEffect(() => {
        // Some components scroll to the middle of the page
        window.scrollTo(0, 0);

        // fetch all articles from the server
        // later to use the .env to store urls
        axios.get("http://localhost:3000/articles")
            .then(res => {
                if (res.data.length > 0) {
                    changeData(res.data);
                }
            })
            .catch(err => console.log(err)); 
    });
    
    // function to do magic
    let [data, changeData] = useState([]);
    let [category, changeCategory] = useState('');
    let [title, changeTitle] = useState('');
    let [brief, changeBrief] = useState('');

    // styling for post
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

    // variable to hold all the content. has to use useState
    // let all_content = (
        // <div style={style_post}>
        //     <p>{category}</p>
        //     <div style={style_content}>
        //         <h4 style={{ width: '70%', color: '#29292e' }}>{title}</h4>
        //         <div id="article-img" style={{ height: '100%' }}>article image</div>
        //     </div>
        //     <p>{brief}</p>
        // </div>
    //     );
    let all_content = [1,2,3];

    return(
        <Link to="/article" style={{textDecoration:'none'}}>
            <div style={{margin: '8em 0'}}>
                
                {data.map((article, k) =>{
                    return (
                        <div style={style_post}>
                            <p>{article.category}</p>
                            <div style={style_content}>
                                <h4 style={{ width: '70%', color: '#29292e' }}>{article.title}</h4>
                                <div id="article-img" style={{ height: '100%' }}>article image</div>
                            </div>
                            <p>{article.brief}</p>
                        </div>
                    )
                })}
                
            </div>
        </Link>
    )
}

export default Description;