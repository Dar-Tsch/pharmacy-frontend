const Serializer = require('../../serializer');
const { ProductType } = require('../../db/models');
const { HttpStatus } = require('../../utils/http');

const listProductTypes = async (req, res) => {
    try {
        const productTypes = await ProductType.findAll();
        res.json(Serializer.serialize(productTypes, ProductType));
    }
    catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: error
        });
    }
};

const createProductType = async (req, res) => {
    const props = await req.body;
    try {
        const productType = await ProductType.create(props);
        res.status(HttpStatus.OK).json(Serializer.serialize(productType, ProductType));
    }
    catch (err) {
        res.status(HttpStatus.BAD_REQUEST).json({
            detail: { errors: err.errors.map((error) => error.message) }
        });
    }
};

const removeProductType = async (req, res) => {
    const productTypeId = await req.params.id;
    try {
        const productType = await ProductType.findByPk(productTypeId);
        if (!productType) {
            res.status(HttpStatus.NOT_FOUND).json({
                detail: 'Product type not found.'
            });
            return;
        }
        await productType.destroy().catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
        res.status(HttpStatus.OK).json({
            detail: 'Product type deleted'
        });
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};

const detailProductType = async (req, res) => {
    const productTypeId = await req.params.id;
    try {
        const product = await ProductType.findByPk(productTypeId);
        if (!product) {
            res.status(HttpStatus.NOT_FOUND)
                .json({
                    detail: 'Product Type not found.'
                });
            return;
        }
        res.json(Serializer.serialize(product, ProductType));
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};

const editProductType = async (req, res) => {
    const productTypeId = await req.params.id;
    const props = await req.body;
    try {
        const productType = await ProductType.findByPk(productTypeId);
        if (!productType) {
            res.status(HttpStatus.NOT_FOUND)
                .json({
                    detail: 'Product Type not found.'
                });
            return;
        }
        await productType.update(props).catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
        await res.json(Serializer.serialize(productType, ProductType));
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};
module.exports = {
    listProductTypes,
    createProductType,
    removeProductType,
    detailProductType,
    editProductType
};
