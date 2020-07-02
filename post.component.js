import React,  {useEffect} from 'react';
import './post.css';

function Post(){
    
    // Some components scroll to the middle of the page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return(
        <div className='form'>
            <h1>Write a Post</h1>
            <form>
                {/* author name & date of post */}
                <div className='post-details'>
                    <input type='text' name='author' placeholder='Author' id='author' />
                    <input type='text' name='date' placeholder='Date (Year Month Day)' id='date' />
                </div>

                {/* post title, image & and the post content */}
                <input type='text' name='title' placeholder='Title' id='title'/>
                <textarea name="content" placeholder='Content' id='content'></textarea>
                <input type='file' name='image' id='image'/>
                
            </form>
        </div>
    )
}

export default Post;