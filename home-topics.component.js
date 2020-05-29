import React from 'react';

function Topics(){

    const style_parent = {
        margin: '1em',
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
        backgroundColor: 'white',
        position: 'sticky',
        top: '0px',
        borderTopLeftRadius: '0.5em',
        borderTopRightRadius: '0.5em'
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