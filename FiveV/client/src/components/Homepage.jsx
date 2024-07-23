import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';


const Home = () => {
    const navigate = useNavigate() // navigate can route the application to a specific URL

    const handleViewPostsClick = () => {
        navigate('/view')
    }

    const handleCreatePostsClick = () => {
        navigate('/posts')
    }

    const handleLogoutClick = () => {
        logout()
    }
    

    return (
        <div className="home">
            <h4>Home</h4>
            <button onClick={(handleCreatePostsClick)}>Create Post</button>
            <button onClick={handleViewPostsClick}>View Posts</button>
            <button onClick={(handleLogoutClick)}>Logout</button>
        </div>
    );
}

export default Home;