import React, { useEffect, useState } from 'react'

import QuillEditor from '../editor/QuillEditor';
// import { Typography, Button, Form, message } from 'antd';
import axios from 'axios';
// import { useSelector } from "react-redux";

// const { Title } = Typography;

function CreatePage(props) {
    // const user = useSelector(state => state.user);

    let [content, setContent] = useState("");
    let [files, setFiles] = useState([]);

    const onEditorChange = (value) => {
        setContent(value);
    }

    const onFilesChange = (files) => {
        setFiles(files);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // setContent("");

        const variables = {
            content: content
        }

        axios.post('http://localhost:3000/articles/add', variables)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        content = "";
    }

    let submit_btn_style = {
        width: '15em',
        height: '2.5em',
        borderRadius: '15px',
        backgroundImage: 'linear-gradient(to right, orange, #c93655)',
        color: 'white',
        fontSize: '1em',
        border: '0px solid transparent'
    }

    return (
        <div style={{margin: '10rem auto'}}>
            <div style={{ textAlign: 'center', margin: '0 0 3em 0' }}>
                <h1>CREATE A BLOG POST!</h1>
            </div>
            <QuillEditor
                placeholder={"Hi Lihle! Write something."}
                onEditorChange={onEditorChange}
                onFilesChange={onFilesChange}
            />

            <form onSubmit={onSubmit}>
                <div style={{ textAlign: 'center', margin: '2rem'}}>
                    <button
                        onSubmit={onSubmit}
                        style={submit_btn_style}
                    >
                        Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePage;