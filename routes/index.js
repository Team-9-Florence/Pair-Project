const router = require('express').Router()
const { response } = require('express')
// const catRouter = require('./cat')
const {UserController} = require('../controller')
const {CatController} = require('../controller')
const authentication = require('../middleware/authentication')

// router.use('/cat', catRouter)
router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(authentication)
router.get("/catsphoto", CatController.getPhotoCats)
router.get("/catsfact", CatController.getCatFacts)


module.exports = router