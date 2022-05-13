const multer = require('multer')

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        if(!file.mimetype.match(/jpeg|jpg|png/)){
            cb(Error('Formato inválido'),false)
            return
        }
        
        cb(null, true)
    }
})