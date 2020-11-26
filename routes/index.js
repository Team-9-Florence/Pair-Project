const router = require('express').Router()
const { response } = require('express')
// const catRouter = require('./cat')
const {UserController} = require('../controller')
const {CatController} = require('../controller')
const authentication = require('../middleware/authentication')
const catRouter = require('./cat')

// router.use('/cat', catRouter)
router.use('/cats', catRouter)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)

router.use(authentication)
router.get("/catsphoto", CatController.getPhotoCats)
router.get("/catsfact", CatController.getCatFacts)
// router.get("/catsAdopt", CatController.getCatAdopt)
// router.get("/catsAdopt/:id", CatController.getCatInfo)
// router.delete("/catsAdopt/:id", CatController.getCatDelete)

module.exports = router