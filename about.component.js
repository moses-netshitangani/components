import React from 'react';

const About = () => {

    // styling
    const style_heading = {
        marginTop: '5em',
        textAlign: 'center',
        color: '#29292e'
    }

    const style_content = {
        color: 'rgb(69, 68, 68)',
        padding: '1em 1em'
    }
    
    return(
        <div>
            <h2 style={style_heading}>
                About Me
            </h2>

            <div style={style_content}>
                <p>
                    Hi! I am <i><b>Kenichi Vasco</b></i> and blogging is one of my many 
                    passions. My aim is to keep you informed about topical  
                    events relating to Fashion, Lifestyle and a little 
                    bit of Gossip too (I mean why not?).
                </p>
                <br />
                <p>
                    All content in this blog is written by myself
                    and I would very much appreciate your feedback, hence
                    I compel you to leave a comment and/or share the 
                    posts.
                </p> 
                <br />
                <p>
                    You can find my socials in the Contact section.
                    Thanks in advance and happy reading ;).
                </p>
                </div>
        </div>
    );
}

export default About;