const router = require('express').Router();
const {
    listProductPurposes,
    createProductPurpose,
    removeProductPurpose,
    detailProductPurpose,
    editProductPurpose
} = require('../controllers/admin/productPurpose');
const AdminAuthMiddleware = require('../middlewares/admin_auth');
const { ProductPurposeSchema, UpdateProductPurposeSchema } = require('../schemas/productPurpose');
const validator = require('../schemas');

router.get('/', listProductPurposes);
router.post('/', AdminAuthMiddleware, validator.body(ProductPurposeSchema), createProductPurpose);
router.delete('/:id([0-9]+)', AdminAuthMiddleware, removeProductPurpose);
router.get('/:id([0-9]+)', detailProductPurpose);
router.put('/:id([0-9]+)', AdminAuthMiddleware, validator.body(UpdateProductPurposeSchema), editProductPurpose);
module.exports = router;
