const express = require('express');
const router = express.Router();
const ControllerProduct = require('../Controllers/productController')
const middleware = require('../Middleware/checkToken')

router.get('/listproduct',middleware.checkToken, ControllerProduct.getAllProduct);
router.get('/product/:id',middleware.checkToken, ControllerProduct.getProduct);
router.post('/addProduct',middleware.checkToken, ControllerProduct.addproduct);
router.put('/updateproduct',middleware.checkToken, ControllerProduct.updateproduct);
router.delete('/daleteProduct',middleware.checkToken, ControllerProduct.daleteProduct);

module.exports = router;