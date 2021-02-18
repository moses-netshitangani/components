import React, { useEffect, useState } from 'react'
import QuillEditor from '../editor/QuillEditor';
import axios from 'axios';
import Quill from 'quill';
// import { useSelector } from "react-redux";

function CreatePage(props) {

    let content = "";
    let topic = "";
    let [files, setFiles] = useState([]);

    const onEditorChange = (value) => {
        content = value;
    }

    const onFilesChange = (files) => {
        setFiles(files);
    }

    const onTopicChange = (value) => {
        topic = document.getElementById('tpc').value;
        console.log(topic);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            content: content,
            topic: topic
        }
        axios.post('http://localhost:3000/articles/add', variables)
            .then(res => {
                console.log(res);
                alert('Post successfully uploaded.')
            })
            .catch(err => {
                console.log(err);
                alert("Post failed to upload.");
            })
        
        window.location = "/";
    }

    // styling for the submit button
    let submit_btn_style = {
        width: '15em',
        height: '2.5em',
        borderRadius: '15px',
        backgroundImage: 'linear-gradient(to right, orange, #c93655)',
        color: 'white',
        fontSize: '1em',
        border: '0px solid transparent',
        outline: 'none',
        cursor: 'pointer'
    }

    // styling for the input field cover
    let input_container = {
        display: 'block',
        margin: '2.5em auto auto auto',
        width: '16em',
        height: '3em',
        padding: '0.5em 0',
        display: 'flex'
    }

    // styling for the input field
    let input_style = {
        outline: 'none',
        width: '12em',
        height: '2.25em',
        padding: '0 0.5em',
        border: '2px solid black',
        borderRadius: '15px',
        display: 'block',
        textAlign: 'center',
        textTransform: 'capitalize'
    }

    return (
        <div style={{margin: '10rem auto'}}>
            <div style={{ textAlign: 'center', margin: '0 0 3em 0' }}>
                <h1>CREATE A BLOG POST!</h1>
            </div>
            <QuillEditor
                placeholder={"Hi Lihle! Write something."
                +"\nTips:"
                +"\n-Select the 'Heading 1' option and write out your heading."
                +"\n-Make sure each post is accompanied by an image, or multiple."
                +"\nGeneral format:"
                +"\n-Heading *Enter* Image *Enter* Author name | Date (in italics), Skip line, Content."}
                onEditorChange={onEditorChange}
                onFilesChange={onFilesChange}
            />

            <form onSubmit={onSubmit}>
                <div style={{ textAlign: 'center', margin: '2rem'}}>

                    {/* Topic input field */}
                    <div style={input_container}>
                        <h2>Topic:</h2>
                        <input type='text' id='tpc' style={input_style} onChange={onTopicChange} required></input>
                    </div>

                    <input type='submit' value='Submit' style={submit_btn_style}></input>
                </div>
            </form>
        </div>
    )
}

export default CreatePage;