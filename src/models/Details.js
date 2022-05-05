const mongoose = require('mongoose');

const DetailsSchema = new mongoose.Schema({
    introInicio:{
        type: String,
        required: true,
    },
    introSobre:{
        type: String,
        required: true,
    },
    skills:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skills',
        }
    ],
    experience:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experience'
    }],
    projects:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
    
})


module.exports = mongoose.model('Details', DetailsSchema);