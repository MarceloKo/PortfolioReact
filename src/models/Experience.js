const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    // CARGO, EMPRESA, (ESTÁGIO, FREELANCE, TRABALHO),
    occupation:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true
    },
    contract:{
        type: String,
        required: true
    },
    dateInitial:{
        type: String,
        required: true
    },
    dateEnd:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
    
})


module.exports = mongoose.model('Experience', ExperienceSchema);