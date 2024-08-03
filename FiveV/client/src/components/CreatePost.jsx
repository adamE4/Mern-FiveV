import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";


const PostForm = () => {
    const { user } = useAuthContext()
    const [title, setTitle] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState(''); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        if(!user){
            setError('Must be logged in')
            return
        }



        const post = { title, make, model, year};


        try{
            const response = await fetch('https://localhost:5050/posts/create', {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
          
           const Json = await response.json()
      


            setTitle('');
            setMake('');
            setModel('');
            setYear('');
            setError(null);
            console.log('New Post', Json);



        }catch(error){
            setError(error.response?.data?.error || 'Post Failed')
        }

       
  
    };

    const handleHomeClick = () => {
        navigate('/home');
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create new Post</h3>

            <label>Post Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <label>Make</label>
            <input
                type="text"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                required
            />

            <label>Model</label>
            <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                required
            />

            <label>Year</label>
            <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
            />

            <button type="submit">Submit</button>
            <button type="button" className="Home" onClick={handleHomeClick}>
                Home
            </button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default PostForm;
