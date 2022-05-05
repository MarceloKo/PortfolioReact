const Experience = require("../models/Experience");
const Details = require("../models/Details");
module.exports= {
    async store(req,res){
        try{
          const response = await Experience.create(req.body);
          await Details.findOneAndUpdate({_id:'627048f079de3066e4ad8dec'}, {$push:{experience:response._id}});
          res.status(200).json(response)
        }catch(error){
      
            res.status(400).json({error:"Erro ao adicionar experiência!"})
        }
        
    },

    async get(req,res){
        try{
            const Experiences = await Experience.find();
            
            
            res.status(200).json(Experiences);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar as experiências!"})
        }
        
    },

    async getOne(req,res){
        const {id} = req.body;
        try{
            const Experiences = await Experience.findOne({_id:id});
            
            
            res.status(200).json(Experiences);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar as experiências!"})
        }
        
    },

    async delete(req,res){
        const {id} = req.body;
        try{
            const Experiences = await Experience.findOneAndRemove({_id:id});
            if(Experiences == null){
                return res.status(400).json({error:"Experiencia não encontrada!"})
            }
            res.status(200).json(Experiences);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar as experiências!"})
        }
        
    },
    
}


