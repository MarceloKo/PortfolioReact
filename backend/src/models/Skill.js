const mongoose = require('mongoose');

const SkillsSchema = new mongoose.Schema({
    language:{
        type: String,
        required: true,
    },
    imgUrl:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
    
})


module.exports = mongoose.model('Skills', SkillsSchema);