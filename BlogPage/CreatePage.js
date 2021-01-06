import React, { useEffect, useState } from 'react'

import QuillEditor from '../editor/QuillEditor';
// import { Typography, Button, Form, message } from 'antd';
import axios from 'axios';
// import { useSelector } from "react-redux";

// const { Title } = Typography;

function CreatePage(props) {
    // const user = useSelector(state => state.user);

    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);

    const onEditorChange = (value) => {
        setContent(value);
    }

    const onFilesChange = (files) => {
        setFiles(files);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        setContent("");

        // if (user.userData && !user.userData.isAuth) {
        //     return alert('Please Log in first');
        // }

        const variables = {
            content: content
            // userID: user.userData._id
        }

        axios.post('http://localhost:3000/articles/add', variables)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    return (
        <div style={{ maxWidth: '700px', margin: '10rem auto', backgroundColor: 'pink' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Create a blog post!</h1>
            </div>
            <QuillEditor
                placeholder={"Hi Lihle! Write something."}
                onEditorChange={onEditorChange}
                onFilesChange={onFilesChange}
            />

            {/* <form onSubmit={onSubmit}>
                <div style={{ textAlign: 'center', margin: '2rem', backgroundColor: 'beige' }}>
                    <button
                        className=""
                        onSubmit={onSubmit}
                    >
                        Submit
                </button>
                </div>
            </form> */}
        </div>
    )
}

export default CreatePage;