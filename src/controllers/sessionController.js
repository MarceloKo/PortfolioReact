const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth.json')

module.exports= {
    async verify(req,res){
        try{
            res.status(200).json({token:true});

        }catch{
            res.status(400).json({token:false});

        }
        
    },

}


