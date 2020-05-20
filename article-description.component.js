import React from 'react';

function Description(){

    const style_post = {
        margin: '0.5em',
        padding: '0.25em',
        borderRadius: '3px',
        webkitBoxShadow: '0 8px 10px -5px grey',
    }

    const style_content = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return(
        <div style={style_post}>
            <p>topic</p>
            <div style={style_content}>
                <h4 style={{ width: '70%', backgroundColor: '#a5604f'}}>Article heading</h4>
                <div style={{height: '100%'}}>article image</div>
            </div>
            <p>Brief article intro</p>
        </div>
    )
}

export default Description;