const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth.json')
module.exports= {
    async store(req,res){
        try{
            const {name,email,password} = req.body;
            const user = {name,email,password};
            if(!name || !email || !password){
                return res.status(400).json({error:'Preencha todos os campos!'})
            }
            if(await User.findOne({email})){
                return res.status(400).json({error:"Usuário já cadastrado!"})

            }

            const response = await User.create(user)
            res.status(200).json({message:'Usuário criado com sucesso!',data:response});
          

        }catch{
            res.status(400).json({error:"Erro ao criar usuário!"})
        }
        
    },

    async get(req,res){
        try{
            const users = await User.find();
           
            res.status(200).json(users);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar usuário!"})
        }
        
    },

    async authenticate(req,res){
        try{
            const {email,password} = req.body;
            const user = await User.findOne({email}).select('+password');
            if(!user){
                return res.status(400).json({error:"Usuário não encontrado!"})
            }

            if(!await bcrypt.compare(password,user.password)){
                return res.status(400).json({error:"Senha incorreta!"})
            }

            user.password = undefined;
        
            const token = jwt.sign({id:user._id},authConfig.secret,{
                expiresIn:86400
            })
            res.json({user,token});

        }catch{
            res.status(400).json({error:"Erro ao autenticar usuário!"})
        }
    }
}


