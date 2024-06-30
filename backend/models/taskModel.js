const mongoose = require('mongoose') //mongoose allows us to create schemas and models

const Schemas = mongoose.Schema

const taskSchema = new Schemas({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        requried: true
    },
    userID :{
        type: String,
        required: true
    },
    importance: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)