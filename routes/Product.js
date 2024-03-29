const router = require('express').Router();
const auth = require('../middleware/authUser');
const productTableControllers = require('../controllers/productTable');
const upload = require('../middleware/multer')

router.post("/addProduct",upload, productTableControllers.insert)
router.get("/getAllProduct", productTableControllers.getAll)
router.get("/getAllProducts", productTableControllers.getAllAdmin)
router.get("/getOneProduct/:id", productTableControllers.getOne)
router.delete("/deleteProduct/:id", productTableControllers.deleteOne)
router.patch("/updateProduct/:id",upload, productTableControllers.updateOne)


module.exports = router;