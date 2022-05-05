const Project = require("../models/Project");

module.exports= {
    async store(req,res){
        try{
          const response = await Project.create(req.body);
          res.status(200).json(response)
        }catch(error){
      
            res.status(400).json({error:"Erro ao adicionar Project!"})
        }
        
    },

    async get(req,res){
        try{
            const Projects = await Project.find();
           
            res.status(200).json(Projects);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar Projects!"})
        }
        
    },

    
}


