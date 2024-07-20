
import bcrypt from "bcryptjs"
import { User } from "../models/Usermodel.js"
import validator from "validator"

export const loginUser = async (req, res) =>{
    res.json({mssg: 'Login User'})
}

export const signupUser = async (req, res) =>{
    const { email, password } = req.body

    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    if(!validator.isStrongPassword(password))
    {
        throw Error('Password is not strong enough')
    }




    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    try{
        const user = await User.create({ email, password: hashed})

        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


