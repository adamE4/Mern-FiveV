import { useState } from "react";
import { useNavigate } from "react-router-dom";


const PostForm = () =>{
    const [title, setTitle] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const post = {title, make, model, year}

    
            console.log('Attempting to add new Post:', JSON.stringify(post))
            const response = await fetch('http://localhost:5050/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const Json = await response.json()


        if(!response.ok){
            setError(Json.error)        
        }
       
        else{

            setTitle('')
            setMake('')
            setModel('')
            setYear('')
            setError(null)
            console.log('New Post', Json)
        }
      
    }

    const handleHomeClick = () => {
        navigate('/')
    }

    return(
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
        <button>Submit</button>
        <button className="Home" onClick={handleHomeClick}>Home</button>
        {error && <div className="error">{error}</div>}
        
        </form>
        
    )
}

export default PostForm