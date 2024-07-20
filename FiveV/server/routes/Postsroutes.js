import express from "express"
import { createPost, getPosts, deletePost, updatePost } from "/Users/adamelmobdy/Documents/MERN-THEFINAL/Mern-FiveV/FiveV/server/controllers/Postcontrollers.js"

const router = express.Router()

router.post("/", createPost)

router.get("/",getPosts)

router.delete("/:id", deletePost)

router.patch("/:id", updatePost)


export default router;