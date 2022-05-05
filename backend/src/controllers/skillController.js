const Skill = require("../models/Skill");

module.exports= {
    async store(req,res){
        try{
         
          const response = await Skill.create(req.body);
          res.status(200).json(response)
        }catch(error){
      
            res.status(400).json({error:"Erro ao adicionar skill!"})
        }
        
    },

    async get(req,res){
        try{
            const skills = await Skill.find();
           
            res.status(200).json(skills);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar skills!"})
        }
        
    },

    
}


