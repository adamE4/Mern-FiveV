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

        const post = {title, entry}

        const response = await axios.get('/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setTitle('')
            setEntry('')
            setError(null)
            console.log('new Post', json)
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