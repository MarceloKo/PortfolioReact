const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports= {
    async store(req,res){
        try{
            const {name,login,password} = req.body;
            const user = {name,login,password};
            if(!name || !login || !password){
                return res.status(400).json({error:'Preencha todos os campos!'})
            }
            if(await User.findOne({login})){
                return res.status(400).json({error:"Usuário já cadastrado!"})

            }

            const response = await User.create(user)
            res.status(200).json({message:'Usuário criado com sucesso!',data:response});
          

        }catch(error){

            res.status(400).json({error:"Erro ao criar usuário!"})
        }
        
    },

    async get(req,res){
        try{
            const users = await User.find().populate({
                path:'details',
                populate:{
                    path:'skills experience projects',
                    
                }
            });
           
            res.status(200).json(users);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar usuário!"})
        }
        
    },

    async authenticate(req,res){
        try{
            const {login,password} = req.body;
            const user = await User.findOne({login}).select('+password');
            if(!user){
                return res.status(400).json({error:"Usuário não encontrado!"})
            }

            if(!await bcrypt.compare(password,user.password)){
                return res.status(400).json({error:"Senha incorreta!"})
            }

            user.password = undefined;
        
            const token = jwt.sign({id:user._id},process.env.AUTH_SECRET,{
                expiresIn:3600
            })
            res.json({user,token});

        }catch{
            res.status(400).json({error:"Erro ao autenticar usuário!"})
        }
    }
}


