import React,  {useState, useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './post.css';
const axios = require('axios');

function Post(){
    
    // Some components scroll to the middle of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    // states for acquiring blog post values
    let [author, setAuthor] = useState('');
    let [title, setTitle] = useState('');
    let [date, setDate] = useState('');
    let [content, setContent] = useState('');
    let [category, setCategory] = useState('');

    // methods encapsulating state change
    let changeAuthor = e => setAuthor(e.target.value);
    let changeTitle = e => setTitle(e.target.value);
    let changeDate = e => setDate(e.target.value);
    let changeContent = e => setContent(e.target.value);
    let changeCategory = e => setCategory(e.target.value);

    // Submitting post to server
    const onSubmit = e => {
        
        // post object
        const post = {
            author: author,
            date: (new Date(date)).toDateString(),
            title: title,
            category: category,
            content: content
        }

        console.log(post);

        axios.post('http://localhost:3000/articles/add', post)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setAuthor('');
        setContent('');
        setDate('');
        setTitle('');

        window.location = '/';
    }

    return(
        <div className='form'>
            <h1>Write a Post</h1>
            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            <form onSubmit={onSubmit}>
                {/* author name & date of post */}
                <div className='post-details'>
                    <input type='text' name='author' placeholder='Author' onChange={changeAuthor} id='author' />
                    <input type='text' name='date' placeholder='Date (Year Month Day)' onChange={changeDate} id='date' />
                </div>

                {/* post title, category, content and image */}
                <input type='text' name='title' placeholder='Title' onChange={changeTitle} id='title'/>
                <input type="text" placeholder='Category' onChange={changeCategory} id='category' />
                <textarea name="content" placeholder='Content' onChange={changeContent} id='content'></textarea>
                <input type='file' name='image' id='image'/>
                <input type='submit' id='submit-button'/>
            </form>
        </div>
    )
}

export default Post;