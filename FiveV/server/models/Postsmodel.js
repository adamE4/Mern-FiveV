import mongoose from "mongoose"


const VechileSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    make:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{timestamps: true })



export const Post = mongoose.model('Post', VechileSchema)