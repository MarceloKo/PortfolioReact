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

    createdAt:{
        type: Date,
        default: Date.now
    }
    
})


module.exports = mongoose.model('Anotation', AnotationSchema);