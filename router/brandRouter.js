const Router = require("express")
const brandController = require("../controller/brandController")
const checkrole = require("../middleware/checkrole")
const router = Router()

router.post("/",checkrole("ADMIN"),brandController.create)
router.get("/",brandController.getAll)


module.exports = router