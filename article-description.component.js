import React from 'react';

function Description(){

    const style_post = {
        margin: '0.5em',
        padding: '0.25em',
        borderRadius: '5px',
        backgroundColor: 'blue'
    }

    const style_content = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return(
        <div style={style_post}>
            <p>topic</p>
            <div style={style_content}>
                <h4 style={{width: '70%', backgroundColor: 'red'}}>Article heading</h4>
                <div style={{height: '100%', backgroundColor: 'white'}}>article image</div>
            </div>
            <p>Brief article intro</p>
        </div>
    )
}

export default Description;