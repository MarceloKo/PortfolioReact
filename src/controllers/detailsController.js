const Details = require("../models/Details");

module.exports= {
    async store(req,res){
        try{
          const response = await Details.create(req.body);
          res.status(200).json(response)
        }catch(error){
      
            res.status(400).json({error:"Erro ao adicionar detalhes!"})
        }
        
    },

    async get(req,res){
        try{
            const Detailss = await Details.find().populate([
                {
                    path:'skills',
                },
                {
                    path:'experience',
                },
                {
                    path:'projects',
                }
                
            ]
            ).select('-__v  -createdAt');
           
            res.status(200).json(Detailss);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar detalhes!"})
        }
        
    },

    
}


