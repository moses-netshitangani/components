import React from 'react';
import '../App.css'

function FullArticle(){

    // styling
    const style_outer = {
        textAlign: 'center',
        marginTop: '7em'
    }

    const style_heading = {
        color: '#29292e'
    }

    const style_text ={
        textAlign: 'justify',
        padding: '1em'
    }

    return(
        <div style={style_outer}>
            <h1 style={style_heading}>This is the article heading.</h1>
            <div className="article-img">
                This is where the article image will go.
            </div>
            <div>
                <p style={style_text}>
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                    This is the content. The whole story. Nothing is left out.
                </p>
            </div>
        </div>
    )
}

export default FullArticle;