const router = require('express').Router();
const auth = require('../middleware/authUser');
const cartTableControllers = require('../controllers/cartTable');

router.post("/addcart", cartTableControllers.insert)
router.get("/getAllcart", cartTableControllers.getAll)
router.get("/getOnecart/:id", cartTableControllers.getOne)
router.delete("/deleteOneCart/:id", cartTableControllers.deleteOne)
router.delete("/deleteAllCart", cartTableControllers.deleteAll)
router.patch("/updateCart/:id", cartTableControllers.updateOne)

module.exports = router;