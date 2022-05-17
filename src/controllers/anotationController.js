const Anotation = require("../models/Anotation");

module.exports= {
    async store(req,res){
        try{  
            const {title,items} = req.body;
            
            const data = {
                title,
                items
            }
            const response = await Anotation.create(data)
            res.status(200).json({data: response});

        }catch(error){
      
            res.status(400).json({error:"Erro ao adicionar anotação!"})
        }
        
    },

    async get(req,res){
        try{
           const response = await Anotation.find().select('-__v -createdAt');
            res.status(200).json(response);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar detalhes!"})
        }
        
    },
    async update(req,res){
        try{
            const {list} = req.body
            list.map(async(grupo)=>{
                return await Anotation.findOneAndUpdate({_id:grupo._id},{$set:{items:grupo.items}})
 
            })

            res.status(200).json('Sucesso');

        }catch(error){
            res.status(400).json({error:"Erro ao atualizar detalhes!"})
        }
    },
    async createItem(req,res){
        try{
            const {_id} = req.body;
            const response = await Anotation.findOneAndUpdate({_id},{$push:{items:{title:'Novo item',description:'descrição'}}})
            res.status(200).json(response);
        }catch(error){
            res.status(400).json({error:"Erro ao criar item!"})
        }
    },
    async deleteItem(req,res){
        try{
            const {_id,idItem} = req.body;
            await Anotation.findOneAndUpdate({_id},{$pull:{items: {_id:idItem}}})
            res.status(200).json({message:"Item deletado com sucesso!"});
        }catch(error){
            res.status(400).json({error:"Erro ao criar item!"})
        }
    },
    
    
}


