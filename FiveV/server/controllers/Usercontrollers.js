
import bcrypt from "bcryptjs"
import { User } from "../models/Usermodel.js"
import validator from "validator"
import jwt from 'jsonwebtoken'

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'}) //taking the user._id and the secret value from our .env file to create a JWT for the user
}


export const loginUser = async (req, res) =>{
    const { email, password } = req.body;

    const user = await User.findOne({ email }) //Finds email to find User

    if(!user){
        res.status(401).json({ error: 'Invalid'})
    }

    const hashed = user.password 

    const isPasswordValid = await bcrypt.compare(password, hashed) // comparing the password passed by the client to the password from the user account we found to verify

    const token = createToken(user._id)

    if(isPasswordValid){
        res.status(200).json({ email, token })
    }
    else{
        res.status(401).json({ error: 'Invalid'})
    }
}

export const signupUser = async (req, res) =>{
    const { email, password } = req.body




    const salt = await bcrypt.genSalt(10) //salting the password which adds random characters to the password
    const hashed = await bcrypt.hash(password, salt) // Using the salt and the password passed by the client and then hashinng it for added secruity

    try{
        const user = await User.create({ email, password: hashed}) //creating user

        const token = createToken(user._id) //creates JWT for user

        console.log('SIGNUP USer ID: ', user._id)

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


