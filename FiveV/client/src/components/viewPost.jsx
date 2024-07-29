import {useState, useEffect } from "react";
import PostDetails from "./PostDetails"
import { useAuthContext } from "../hooks/useAuthContext";

function viewPost(){

    const[posts, setPosts] = useState([]);

    const user = useAuthContext()


    useEffect(()=> {
        const fetchPosts  = async () =>{
            try{
              const response = await fetch('https://localhost:5050/posts', {
                headeers:{
                  'Authorization': 'Bearer ${user.token}',
                }
              })
              const data = response.json()
              setPosts(data)
            }catch(error){
                console.error('Error fetching posts', error)
            }
          

        }

        if(user){
          fetchPosts()
        }

        fetchPosts()
    }, [user])

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