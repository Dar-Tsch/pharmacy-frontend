const router = require('express').Router();
const {
    listProducts,
    createProduct,
    removeProduct,
    detailProduct,
    editProduct
} = require('../controllers/admin/products');
const AdminAuthMiddleware = require('../middlewares/admin_auth');
const { ProductSchema, UpdateProductSchema } = require('../schemas/product');
const validator = require('../schemas');

router.get('/', listProducts);
router.post('/', AdminAuthMiddleware, validator.body(ProductSchema), createProduct);
router.delete('/:id([0-9]+)', AdminAuthMiddleware, removeProduct);
router.get('/:id([0-9]+)', detailProduct);
router.put('/:id([0-9]+)', AdminAuthMiddleware, validator.body(UpdateProductSchema), editProduct);
module.exports = router;
