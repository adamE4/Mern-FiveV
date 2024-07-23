import React from 'react';
import { useNavigate } from 'react-router-dom'

const Preview = () => {
    const navigate = useNavigate() // navigate can route the application to a specific URL

    const handleSignUpClick = () => {
        navigate('/SignUp')
    }

    const handleLoginClick = () => {
        navigate('/Login')
    }
    

    return (
        <div className="preview">
            <h4>Home</h4>
            <button onClick={(handleSignUpClick)}>Create Post</button>
            <button onClick={handleLoginClick}>View Posts</button>
        </div>
    );
}

export default Preview;