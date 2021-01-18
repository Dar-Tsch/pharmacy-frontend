const router = require('express').Router();
const {
    listProductTypes,
    createProductType,
    removeProductType,
    detailProductType,
    editProductType
} = require('../controllers/admin/productTypes');
const AdminAuthMiddleware = require('../middlewares/admin_auth');
const { ProductTypeSchema, UpdateProductTypeSchema } = require('../schemas/productType');
const validator = require('../schemas');

router.get('/', listProductTypes);
router.post('/', AdminAuthMiddleware, validator.body(ProductTypeSchema), createProductType);
router.delete('/:id([0-9]+)', AdminAuthMiddleware, removeProductType);
router.get('/:id([0-9]+)', detailProductType);
router.put('/:id([0-9]+)', AdminAuthMiddleware, validator.body(UpdateProductTypeSchema), editProductType);
module.exports = router;
