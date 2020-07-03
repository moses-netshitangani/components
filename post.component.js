import React,  {useEffect} from 'react';
import './post.css';
import { useState } from 'react';

function Post(){
    
    // Some components scroll to the middle of the page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // states for acquiring blog post values
    let [author, setAuthor] = useState('');
    let [title, setTitle] = useState('');
    let [date, setDate] = useState('');
    let [content, setContent] = useState('');
    let [category, setCategory] = useState('');

    // methods encapsulating state change
    let changeAuthor = e => {
        setAuthor(e.target.value);
    }
    let changeTitle = e => {
        setTitle(e.target.value);
    }
    let changeDate = e => {
        setDate(e.target.value);
    }
    let changeContent = e => {
        setContent(e.target.value);
    }
    let changeCategory = e => {
        setCategory(e.target.value);
    }

    // Submitting post to server
    const onSubmit = e => {
        e.preventDefault();
        console.log("author is: "+author);
        console.log("title is: " + title);

        setAuthor('');
        setContent('');
        setDate('');
        setTitle('');

    }

    return(
        <div className='form'>
            <h1>Write a Post</h1>
            <form onSubmit={onSubmit}>
                {/* author name & date of post */}
                <div className='post-details'>
                    <input type='text' name='author' placeholder='Author' onChange={changeAuthor} id='author' />
                    <input type='text' name='date' placeholder='Date (Year Month Day)' onChange={changeDate} id='date' />
                </div>

                {/* post title, category, content and image */}
                <input type='text' name='title' placeholder='Title' onChange={changeTitle} id='title'/>
                <input type="text" placeholder='Category' onChange={setCategory} id='category' />
                <textarea name="content" placeholder='Content' onChange={changeContent} id='content'></textarea>
                <input type='file' name='image' id='image'/>
                
            </form>
        </div>
    )
}

export default Post;