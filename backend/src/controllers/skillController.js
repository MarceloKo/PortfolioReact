const Cloudinary = require("../libs/Cloudinary");
const Details = require("../models/Details");
const Skill = require("../models/Skill");

module.exports = {
    async store(req, res) {

        try {
            const { language } = JSON.parse(req.body.data)

            if(!language){
                return res.status(400).json({
                    message: "Informe a linguagem!"
                })
            }
            if(!req.file){
                return res.status(400).json({
                    message:"Informe uma imagem!"
                })
            }

            const image = await Cloudinary.upload(req.file.path, `storage/user/`)
      
            const response = await Skill.create({language,imgUrl:image.url});
            await Details.findOneAndUpdate({_id:'627048f079de3066e4ad8dec'},{$push:{skills:response._id}})
            res.status(200).json({message:"Sucesso!"})
        } catch (error) {
            console.log(error)
            res.status(400).json({ error: "Erro ao adicionar skill!" })
        }

    },

    async get(req, res) {
        try {
            const skills = await Skill.find();

            res.status(200).json(skills);
        }
        catch {
            res.status(400).json({ error: "Erro ao buscar skills!" })
        }

    },

    async getOne(req,res){
        const {id} = req.body;
        try{
            const Skills = await Skill.findOne({_id:id});
            
            
            res.status(200).json(Skills);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar as skills!"})
        }
        
    },

    async delete(req,res){
        const {id} = req.body;
        try{
            const Skills = await Skill.findOneAndRemove({_id:id});
            if(Skills == null){
                return res.status(400).json({error:"Skill não encontrada!"})
            }
            res.status(200).json(Skills);
         }
        catch{
            res.status(400).json({error:"Erro ao buscar as Skills!"})
        }
        
    },


}


