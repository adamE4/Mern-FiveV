import {useState, useEffect } from "react";
import PostDetails from "./PostDetails"

function viewPost(){

    const[posts, setPosts] = useState([]);


    useEffect(()=> {
        const fetchPosts  = async () =>{
            try{
              const response = await fetch('/posts')
              const data = response.json()
              setPosts(data)
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

        </div>
    );
}

export default viewPost