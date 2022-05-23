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

routes.post('/user/store' ,authMiddleware,UserController.store)
routes.get('/user/get', UserController.get)
routes.post('/user/authenticate', UserController.authenticate)

routes.post('/skill/store',authMiddleware ,upload.single('arrayOfFiles') ,skillController.store)
routes.post('/skill/delete',authMiddleware ,skillController.delete)
routes.get('/skill/get', skillController.get)
routes.post('/skill/getone', skillController.getOne)

routes.post('/project/store',authMiddleware,upload.single('arrayOfFiles'),projectController.store)
routes.get('/project/get', projectController.get)
routes.post('/project/delete',authMiddleware ,projectController.delete)

routes.post('/experience/store',authMiddleware, experienceController.store)
routes.post('/experience/delete',authMiddleware ,experienceController.delete)
routes.get('/experience/get', experienceController.get)
routes.post('/experience/getone', experienceController.getOne)
routes.post('/experience/update',authMiddleware ,experienceController.update)

routes.post('/details/store',authMiddleware, detailsController.store)
routes.get('/details/get', detailsController.get)
routes.post('/details/update',authMiddleware ,detailsController.update)

routes.post('/anotation/store',authMiddleware ,anotationController.store)
routes.get('/anotation/get', anotationController.get)
routes.post('/anotation/update',authMiddleware ,anotationController.update)
routes.post('/anotation/createitem',authMiddleware ,anotationController.createItem)
routes.post('/anotation/deleteitem',authMiddleware ,anotationController.deleteItem)
routes.post('/anotation/updateitem',authMiddleware ,anotationController.updateItem)
routes.post('/anotation/hiddengroup',authMiddleware ,anotationController.hiddenGroup)

module.exports = routes;