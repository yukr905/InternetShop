const Router = require("express")
const deviceController = require("../controller/deviceController")
const checkrole = require("../middleware/checkrole")
const router = Router()

router.post("/",checkrole("ADMIN"),deviceController.create)
router.get("/",deviceController.getAll)
router.get("/:id",deviceController.getOne)


module.exports = router