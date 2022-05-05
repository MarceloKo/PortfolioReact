const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    login:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    details:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Details',
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
    
})
UserSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,10);
    
    next();
})

module.exports = mongoose.model('User', UserSchema);