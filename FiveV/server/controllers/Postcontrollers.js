import mongoose from 'mongoose'
import { Post } from '../models/Postsmodel.js'

// get all posts
export const getPosts = async(req, res) =>{
    const posts = await Post.find({}).sort({createdAt: -1})

    res.status(200).json(posts)
}




// create a new post
export const createPost = async(req, res) =>{
    const {title, entry} = req.body

    try{
        const post = await Post.create({title, entry})
        const savedPost = await post.save()
        res.status(200).json({ post: post._id})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


// delete a post

export const deletePost = async(req, res) => {
    const { id } = req.parms

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Post'})
    }
    
    const post = await Post.findOneAndDelete({_id: id})

    if(!post){
        return res.status(400).json({error: 'No such Post'})
    }
    res.status(200).json(post)
}

// update a post
export const updatePost = async(req, res) =>{
    const { id } = req.parms

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Post'})
    }

    const post = await Post.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!post){
        return res.status(400).json({error: 'No such Post'})
    }
    res.status(200).json(post)
}

