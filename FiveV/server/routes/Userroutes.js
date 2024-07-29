import express from "express"

import { loginUser, signupUser } from "/Users/adamelmobdy/Documents/Mern-TheFinal/Mern-FiveV/FiveV/server/controllers/Usercontrollers.js"



const router = express.Router()

router.post('/login', loginUser)

router.post('/signup', signupUser)





export default router