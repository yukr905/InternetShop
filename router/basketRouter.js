const Router = require("express")
const basketController = require("../controller/basketController")
const auth = require("../middleware/auth")
const router = Router()

router.post("/",auth,basketController.create)
//router.get("/",auth,basketController.getAll)



module.exports = router