const express = require('express')
const routes = express.Router()
const authMiddleware = require('../middlewares/auth')
const UserController = require('../controllers/userController')

routes.post('/user/store' ,UserController.store)
routes.get('/user/get', authMiddleware ,UserController.get)
routes.post('/user/authenticate', UserController.authenticate)


module.exports = routes;