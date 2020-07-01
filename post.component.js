import React from 'react';
import './post.css';

function Post(){

    return(
        <div style={{minHeight: '100vh', backgroundColor: 'teal', marginTop: '10em'}}>
            <form>
                {/* author name & date of post */}
                <div className='post-details'>
                    <label>
                        Author:
                        <input type='text' name='author' id='author' />
                    </label>
                    <label>
                        Date(Year Month Day):
                        <input type='text' name='date' id='date' />
                    </label>
                </div>

                {/* post title, image & and the post content */}
                <input type='text' name='title' id='title'/>
                <textarea name="content" id='content'></textarea>
                <input type='file' name='image' id='image'/>
                
            </form>
        </div>
    )
}

export default Post;