const PostDetails = ({ post }) =>{
return(
   <div className="post-details">
    <h4>{post.title}</h4>
    <p>Vechile: {post.entry}</p>
    <p>{post.createdAt}</p>
   </div>
)
}

export default PostDetails