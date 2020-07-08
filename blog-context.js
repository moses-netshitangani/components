import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogArticles = (props) => {

    useEffect(() =>{
        // fetch data after component mounts
        // later to use the .env file to store urls
        axios.get("http://localhost:3000/articles")
            .then(res => {
                if (res.data.length > 0) {
                    changeData(res.data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    // data state
    let [data, changeData] = useState([]);

    return(
        <BlogContext.Provider value={data}>
            {props.children}
        </BlogContext.Provider>
    );
}