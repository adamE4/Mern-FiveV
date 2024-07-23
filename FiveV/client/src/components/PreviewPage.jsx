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
            <h4>Welcome to FiveV</h4>
            <button onClick={(handleSignUpClick)}>Sign Up</button>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
}

export default Preview;