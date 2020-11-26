const router = require('express').Router()
// const catRouter = require('./cat')
const {UserController} = require('../controller')

// router.use('/cat', catRouter)
router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router