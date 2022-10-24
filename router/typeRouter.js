const Router = require("express")
const typeControler = require("../controller/typeControler")
const checkrole = require("../middleware/checkrole")

const router = Router()

router.post("/",checkrole("ADMIN"), typeControler.create)
router.get("/", typeControler.getAll)


module.exports = router