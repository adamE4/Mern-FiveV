import jwt from 'jsonwebtoken'
import { User } from '../models/Usermodel.js'

export const requireAuth = async (req, res, next)  =>{

    const { authorization } = req.headers
    console.log('Authorization header:', authorization);

    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, process.env.SECRET)

        if(!_id){
            return res.status(401).json({error: 'Token failing'})
        }

        console.log('Id: ', _id)

        req.user = await User.findOne({ _id }).select('_id')

        if(!req.user){
            return res.status(401).json({error: 'User not found'})
        }
        console.log('USERIDAFTERBEENFOUND: ', req.user._id)
        next()
    }
    catch(error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})

    }

}