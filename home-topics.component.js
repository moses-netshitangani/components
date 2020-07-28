import React from 'react';
import {Link} from 'react-router-dom';

function Topics(){

    const style_parent = {
        margin: '0.9em',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        borderBottom: '1.5px solid black',
        backgroundColor: 'white'
    }

    const style_child = {
        fontWeight: '500',
        color: 'black',
        flex: '1',
        marginBottom: '0.5em'
    }

    const style_outer = {
        width: '100%',
        height: '7.5%',
        backgroundColor: 'white',
        position: 'fixed',
        top: '10%',
        borderTopLeftRadius: '1em',
        borderTopRightRadius: '1em'
    }

    return(
        <div style={style_outer}>
            <div style={style_parent}>
                <Link to='/News' style={{textDecoration: 'none'}}>
                    <h4 style={style_child}>News</h4>
                </Link>
                <Link to='Lifestyle' style={{textDecoration: 'none'}}>
                    <h4 style={style_child}>Lifestyle</h4>
                </Link>
                <Link to='Fashion' style={{textDecoration: 'none'}}>
                    <h4 style={style_child}>Fashion</h4>   
                </Link>
            </div>
        </div>
    )
}

export default Topics;