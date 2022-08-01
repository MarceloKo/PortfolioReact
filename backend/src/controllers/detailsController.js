const Details = require("../models/Details");

module.exports= {
    async store(req,res){
        try{
          const response = await Details.create(req.body);
            return res.status(200).json(response)
        }catch(error){
            return res.status(400).json({error:"Erro ao adicionar detalhes!"})
        }
        
    },

    async get(req,res){
        try{
            const Detailss = await Details.find().populate([
                {
                    path:'skills',
                    select:'-__v -createdAt'
                },
                {
                    path:'experience',
                    select:'-__v -createdAt'

                },
                {
                    path:'projects',
                    select:'-__v -createdAt'

                }
                
            ]
            ).select('-__v  -createdAt');
           
            return res.status(200).json(Detailss);
         }
        catch{
           return res.status(400).json({error:"Erro ao buscar detalhes!"})
        }
        
    },
    async update(req,res){ 
        try{
            const {_id, introInicio,introSobre} = req.body;
            if(!_id || !introInicio || !introSobre){
               return res.status(400).json({error:"Preencha todos os campos!"})
            }
            const response = await Details.findByIdAndUpdate(_id, {introInicio,introSobre});
            return res.status(200).json(response);
        }catch(error){
            return res.status(400).json({error:"Erro ao atualizar detalhes!"})
        }
    }
}


