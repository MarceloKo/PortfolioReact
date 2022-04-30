const express = require('express')
const routes = express.Router()
const authMiddleware = require('../middlewares/auth')
const UserController = require('../controllers/userController')
const sessionController = require('../controllers/sessionController')

routes.post('/user/store' ,UserController.store)
routes.get('/user/get', UserController.get)
routes.post('/user/authenticate', UserController.authenticate)

routes.get('/session/verify', authMiddleware, sessionController.verify)

module.exports = routes;