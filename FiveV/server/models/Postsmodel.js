const mongoose = require('mongoose')

const Schema = mongoose.Schema

const VechileSchema = new mongoose.Schema({
    make:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    year:{
        type:Number,
        required: true
    },
})

const Postschema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    entry:{
        type: VechileSchema,
        required: true
    },
}, {timestamps: true })

module.exports = mongoose.model('Vechile', VechileSchema)
module.exports = mongoose.model('Post', Postschema)