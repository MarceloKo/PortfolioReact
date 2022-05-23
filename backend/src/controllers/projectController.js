const Cloudinary = require("../libs/Cloudinary");
const Details = require("../models/Details");
const Project = require("../models/Project");

module.exports= {
    async store(req,res){
        
        try{
            const { title,description } = JSON.parse(req.body.data)
            
            if(!title){
                return res.status(400).json({
                    message: "Informe o titulo!"
                })
            }
            if(!description){
                return res.status(400).json({
                    message: "Informe a descrição!"
                })
            }
            if(!req.file){
                return res.status(400).json({
                    message:"Informe uma imagem!"
                })
            }

            const image = await Cloudinary.upload(req.file.path, `storage/user/projects`)
            const response = await Project.create({title:title,description:description,imgUrl:image.url});
            await Details.findOneAndUpdate({_id:'627048f079de3066e4ad8dec'},{$push:{projects:response._id}})
            res.status(200).json({message:"Sucesso!"})
        }catch(error){
      
            res.status(400).json({error:"Erro ao adicionar Projeto!"})
        }
        
    },

    async get(req,res){
        try{
            const Projects = await Project.find();
           
            res.status(200).json(Projects);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar projetos!"})
        }
        
    },
    async delete(req,res){
        const {id} = req.body;
        try{
            const Projeto = await Project.findOneAndRemove({_id:id});
            if(Projeto == null){
                return res.status(400).json({error:"Projeto não encontrado!"})
            }
            res.status(200).json(Projeto);
        }catch{
            res.status(400).json({error:"Erro ao deletar projeto!"})
        }
    }

    
}


