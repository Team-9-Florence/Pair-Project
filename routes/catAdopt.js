const router = require('express').Router()
const {CatController} = require('../controller')
const authentication = require('../middleware/authentication')

router.use(authentication)
router.get("/", CatController.getCatAdopt) // list keseluruhan kayak fetchcats all tapi dari database
router.get("/:id", CatController.getCatInfo) // fulll list cat dari id database tabel cats yg punya kita
router.delete("/:id", CatController.deleteCats)

module.exports = router