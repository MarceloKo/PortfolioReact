const express = require('express')
const routes = express.Router()
const authMiddleware = require('../middlewares/auth')
const UserController = require('../controllers/userController')
const sessionController = require('../controllers/sessionController')
const skillController = require('../controllers/skillController')
const projectController = require('../controllers/projectController')
const detailsController = require('../controllers/detailsController')
const experienceController = require('../controllers/experienceController')


routes.get('/session/verify', authMiddleware, sessionController.verify)

routes.post('/user/store' ,UserController.store)
routes.get('/user/get', UserController.get)
routes.post('/user/authenticate', UserController.authenticate)

routes.post('/skill/store', skillController.store)
routes.get('/skill/get', skillController.get)

routes.post('/project/store', projectController.store)
routes.get('/project/get', projectController.get)

routes.post('/experience/store', experienceController.store)
routes.post('/experience/delete', experienceController.delete)
routes.get('/experience/get', experienceController.get)
routes.post('/experience/getone', experienceController.getOne)

routes.post('/details/store', detailsController.store)
routes.get('/details/get', detailsController.get)


module.exports = routes;