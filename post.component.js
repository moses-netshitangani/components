import React from 'react';
import './post.css';

function Post(){

    return(
        <div style={{minHeight: '100vh', backgroundColor: 'teal', marginTop: '10em'}}>
            <form>
                {/* author name & date of post */}
                <input type='text' name='author' id='author'/>
                <input type='text' name='date' id='date'/>

                {/* post title, image & and the post content */}
                <input type='text' name='title' id='title'/>
                <textarea name="content" id='content'></textarea>
                <input type='file' name='image' id='image'/>
                
            </form>
        </div>
    )
}

export default Post;