const Serializer = require('../../serializer');
const { ProductPurpose } = require('../../db/models');
const { HttpStatus } = require('../../utils/http');

const listProductPurposes = async (req, res) => {
    try {
        const productPurposes = await ProductPurpose.findAll();

        res.json(Serializer.serialize(productPurposes, ProductPurpose));
    }
    catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: error
        });
    }
};

const createProductPurpose = async (req, res) => {
    const props = await req.body;
    try {
        const productPurpose = await ProductPurpose.create(props);
        res.status(HttpStatus.OK).json(Serializer.serialize(productPurpose, ProductPurpose));
    }
    catch (err) {
        res.status(HttpStatus.BAD_REQUEST).json({
            detail: { errors: err.errors.map((error) => error.message) }
        });
    }
};

const removeProductPurpose = async (req, res) => {
    const productPurposeId = await req.params.id;
    try {
        const productPurpose = await ProductPurpose.findByPk(productPurposeId);
        if (!productPurpose) {
            res.status(HttpStatus.NOT_FOUND).json({
                detail: 'Product Purpose not found.'
            });
            return;
        }
        await productPurpose.destroy().catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
        res.status(HttpStatus.OK).json({
            detail: 'Product Purpose deleted'
        });
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};

const detailProductPurpose = async (req, res) => {
    const productPurposeId = await req.params.id;
    try {
        const product = await ProductPurpose.findByPk(productPurposeId);
        if (!product) {
            res.status(HttpStatus.NOT_FOUND)
                .json({
                    detail: 'Product Purpose not found.'
                });
            return;
        }
        res.json(Serializer.serialize(product, ProductPurpose));
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};

const editProductPurpose = async (req, res) => {
    const productPurposeId = await req.params.id;
    const props = await req.body;
    try {
        const productPurpose = await ProductPurpose.findByPk(productPurposeId);
        if (!productPurpose) {
            res.status(HttpStatus.NOT_FOUND)
                .json({
                    detail: 'Product Purpose not found.'
                });
            return;
        }
        // eslint-disable-next-line max-len
        await productPurpose.update(props).catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
        await res.json(Serializer.serialize(productPurpose, ProductPurpose));
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};
module.exports = {
    listProductPurposes,
    createProductPurpose,
    removeProductPurpose,
    detailProductPurpose,
    editProductPurpose
};
