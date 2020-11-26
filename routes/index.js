const router = require('express').Router()
const { response } = require('express')
// const catRouter = require('./cat')
const {UserController} = require('../controller')
const {CatController} = require('../controller')

// router.use('/cat', catRouter)
router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get("/catsphoto", CatController.getPhotoCats)
router.get("/catsfact", CatController.getCatFacts)

router.get("/cats", CatController.getPetFinder)
router.post("/cats/:id", CatController.adoptCats)
router.delete("/cats/:id", CatController.deleteCats)


module.exports = router