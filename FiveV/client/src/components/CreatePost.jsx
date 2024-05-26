import {useState } from "react";
import axios from "axios"
const PostForm = () =>{
    const [title, setTitle] = useState('')
    const [entry, setEntry] = useState('')
    const [error, setError] = useState(null)
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const post = {title, entry:
        {
            make,
            model,
            year: parseInt(year, 10)
        }}

       

        try{
            const response = await axios.get('/posts')

            setTitle('')
            setEntry('')
            setMake('')
            setModel('')
            setYear('')
            setError(null)
            console.log('New Post', response.data)
        }
        catch(error){
            console.error('Error Axios fault', error)
            setError(error.response?.data?.error || 'Failed to create post')
        }
        
    }


    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create new Post</h3>
            <label>Post Title</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />


            <label>Make</label>
            <input
            type="text"
            onChange={(e) => setMake(e.target.value)}
            value={make}
            />


            <label>Model</label>
            <input
            type="text"
            onChange={(e) => setModel(e.target.value)}
            value={model}
            />

            <label>Year</label>
            <input
            type="number"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            />
        <button>ADD</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PostForm