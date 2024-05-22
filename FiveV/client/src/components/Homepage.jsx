import {useState, useEffect } from "react";
import axios from "axios";
import PostDetails from "../components/PostDetails"
import PostForm from "../components/CreatePost";
function Home(){

    const[posts, setPosts] = useState([]);


    useEffect(()=> {
        const fetchPosts  = async () =>{
            try{
                const response = await axios.get('/posts')
                setPosts(response.data)
            }catch(error){
                console.error('Error fetching posts', error)
            }
          

        }


        fetchPosts()
    }, [])

    return (
        <div className="App">
          <div className="posts">
            {Array.isArray(posts) && posts.map(post =>(
                    posts.map((post) => (
                      <PostDetails key={post._id} post={post}/>
                    ))
                  ) (
                    <p>No posts available</p>
            ))}
          </div>
          <PostForm />
        </div>
    );
}

export default Home