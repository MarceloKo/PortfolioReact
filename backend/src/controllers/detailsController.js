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
                    select:'-_id -__v -createdAt'
                },
                {
                    path:'experience',
                    select:'-_id -__v -createdAt'

                },
                {
                    path:'projects',
                    select:'-_id -__v -createdAt'

                }
                
            ]
            ).select('-__v  -createdAt -_id');
           
            res.status(200).json(Detailss);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar detalhes!"})
        }
        
    },
    async update(req,res){
        const {_id, introInicio,introSobre} = req.body;
        if(!_id || !introInicio || !introSobre){
            res.status(400).json({error:"Preencha todos os campos!"})
        }
        try{
            const response = await Details.findByIdAndUpdate(_id, {introInicio,introSobre});
            res.status(200).json(response);
        }catch(error){
            res.status(400).json({error:"Erro ao atualizar detalhes!"})
        }
    }
    
}


