
import bcrypt from "bcryptjs"
import { User } from "../models/Usermodel.js"


export const loginUser = async (req, res) =>{
    res.json({mssg: 'Login User'})
}

export const signupUser = async (req, res) =>{
    const { email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    try{
        const user = await User.create({ email, password})

        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


