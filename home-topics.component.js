import React from 'react';

function Topics(){

    const style_parent = {
        margin: '0.5em',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        borderBottom: '1.5px solid black',
        backgroundColor: 'white',
    }

    const style_child = {
        fontWeight: '500',
        color: 'black',
        marginBottom: '0.5em'
    }

    const style_outer = {
        width: '100%',
        height: '40px',
        backgroundColor: 'white',
        position: 'fixed',
        top: '55px',
        borderTopLeftRadius: '1em',
        borderTopRightRadius: '1em',
    }

    return(
        <div style={style_outer}>
            <div style={style_parent}>
                <h4 style={style_child}>News</h4>
                <h4 style={style_child}>Lifestyle</h4>
                <h4 style={style_child}>Fashion</h4>
            </div>
        </div>
    )
}

export default Topics;