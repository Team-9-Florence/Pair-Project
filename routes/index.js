const router = require('express').Router()
const { response } = require('express')
// const catRouter = require('./cat')
const {UserController} = require('../controller')
const {CatController} = require('../controller')
const authentication = require('../middleware/authentication')
const catRouter = require('./cat')
const catAdoptRouter = require('./catAdopt')

// router.use('/cat', catRouter)
router.use('/cats', catRouter)
router.use('/catsAdopt', catAdoptRouter)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)

router.use(authentication)
router.get("/catsFact", CatController.getCatsFact)
// router.get("/catsphoto", CatController.getPhotoCats)
// router.get("/catsfact", CatController.getCatFacts)

module.exports = router