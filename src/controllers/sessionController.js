module.exports= {
    async verify(req,res){
        try{
            
            res.status(200).json({token:true});

        }catch{
            res.status(400).json({token:false});

        }
        
    },

}


