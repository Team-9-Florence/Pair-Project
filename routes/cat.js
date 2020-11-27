const router = require('express').Router()
const {CatController} = require('../controller')
const authentication = require('../middleware/authentication')

router.use(authentication)
router.get("/", CatController.getPetFinder)
router.get("/:id", CatController.getPetFinderById) // Tambahan
router.post("/:id", CatController.adoptCats)

module.exports = router