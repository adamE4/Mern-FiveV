import {useState, useEffect } from "react";
import axios from "axios";

function Home(){

    const[posts, setPosts] = useState(null)


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
            {posts.length > 0 ? (
              posts.map((post) => (
                <p key={post._id}>{post.title}</p>
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>
        </div>
    );
}

export default Home