import express from "express"
import { createPost, getPosts, deletePost, updatePost } from "/Users/adamelmobdy/Documents/MERN-THEFINAL/Mern-FiveV/FiveV/server/controllers/Postcontrollers.js"
import { requireAuth } from "../middleware/requireAuth.js"

const router = express.Router()

router.use(requireAuth)

router.post("/", createPost)

router.get("/",getPosts)

router.delete("/:id", deletePost)

router.patch("/:id", updatePost)


export default router;