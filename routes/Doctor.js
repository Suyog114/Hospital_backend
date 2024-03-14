const router = require('express').Router();
const auth = require('../middleware/authUser');
const doctorTableControllers = require('../controllers/doctorTable');
const upload = require('../middleware/multer');

router.post("/registerDoctor",upload, doctorTableControllers.insert)
router.post("/loginDoctor", doctorTableControllers.find)
router.get("/getAllDoctor", doctorTableControllers.getAll)
router.get("/getOneDoctor/:id", doctorTableControllers.getOne)
router.delete("/deleteOneDoctor/:id",doctorTableControllers.deleteOne)
router.post("/sendMail",auth.verifyUser, doctorTableControllers.sendMail)
router.patch("/updateDoctor/:id",upload, doctorTableControllers.updateOne)



module.exports = router;