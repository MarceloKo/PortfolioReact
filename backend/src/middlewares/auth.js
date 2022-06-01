const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const User = require('../models/User');
module.exports = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: "Token não informado!" })
        }
        const parts = authHeader.split(' ');
        if (!parts.length === 2) {
            return res.status(401).json({ error: "Token mal formatado!" })
        }
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme)) {
            return res.status(401).json({ error: "Token mal formatado!" })
        }

        jwt.verify(token, authConfig.secret, async(err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Token inválido!" })
            }else{
                req.userId = decoded.id;
                const response = await User.findById(req.userId);
        
                if (!response) {
                    return res.status(401).json({ error: "Usuário não encontrado!" })
                }
                return next();
            }
        }).catch(err => {console.log(err)})
 
    } catch {
        return res.status(401).json({ error: "Token inválido!" })
    }

}