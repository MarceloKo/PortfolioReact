const mongoose = require('mongoose');

const AnotationSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
       
    },
    items:[
        {
            title:{
                type: String,
                required: true,
            },
            description:{
                type: String,
                required: true,
            }
        }
    ],
    hidden:{
        type: Boolean,
        default: false
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
    
})


module.exports = mongoose.model('Anotation', AnotationSchema);