import express from "express"
import { createPost, getPosts, deletePost, updatePost } from "/Users/adamelmobdy/Documents/Mern/Mern-FiveV/FiveV/server/controllers/Postcontrollers.js"

const router = express.Router()

router.post("/", createPost)

router.get("/",getPosts)

router.delete("/:id", deletePost)

router.patch("/:id", updatePost)


export default router;