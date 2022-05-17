const express = require('express')

const upload = require('../libs/multer')
const routes = express.Router()
const authMiddleware = require('../middlewares/auth')
const UserController = require('../controllers/userController')
const sessionController = require('../controllers/sessionController')
const skillController = require('../controllers/skillController')
const projectController = require('../controllers/projectController')
const detailsController = require('../controllers/detailsController')
const experienceController = require('../controllers/experienceController')
const anotationController = require('../controllers/anotationController')

routes.get('/session/verify', authMiddleware, sessionController.verify)

routes.post('/user/store' ,UserController.store)
routes.get('/user/get', UserController.get)
routes.post('/user/authenticate', UserController.authenticate)

routes.post('/skill/store', upload.single('arrayOfFiles') ,skillController.store)
routes.post('/skill/delete', skillController.delete)
routes.get('/skill/get', skillController.get)
routes.post('/skill/getone', skillController.getOne)

routes.post('/project/store', projectController.store)
routes.get('/project/get', projectController.get)

routes.post('/experience/store', experienceController.store)
routes.post('/experience/delete', experienceController.delete)
routes.get('/experience/get', experienceController.get)
routes.post('/experience/getone', experienceController.getOne)
routes.post('/experience/update', experienceController.update)

routes.post('/details/store', detailsController.store)
routes.get('/details/get', detailsController.get)
routes.post('/details/update', detailsController.update)

routes.post('/anotation/store', anotationController.store)
routes.get('/anotation/get', anotationController.get)
routes.post('/anotation/update', anotationController.update)
routes.post('/anotation/createitem', anotationController.createItem)
routes.post('/anotation/deleteitem', anotationController.deleteItem)


module.exports = routes;