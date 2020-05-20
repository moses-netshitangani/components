import React from 'react';

function Topics() {

    const style_parent = {
        margin: '1em',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        borderBottom: '1.5px solid black'
    }

    const style_child = {
        fontWeight: '500',
        color: 'black',
        marginBottom: '0.5em'
    }

    return(
        <div style={style_parent}>
            <p style={style_child}>News</p>
            <p style={style_child}>Lifestyle</p>
            <p style={style_child}>Fashion</p>
        </div>
    )
}

export default Topics;