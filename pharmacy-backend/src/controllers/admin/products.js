const Serializer = require('../../serializer');
const { Product } = require('../../db/models');
const { HttpStatus } = require('../../utils/http');

const listProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(Serializer.serialize(products, Product));
    }
    catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: error
        });
    }
};
const createProduct = async (req, res) => {
    const props = await req.body;
    try {
        const product = await Product.create(props);
        res.status(HttpStatus.OK).json(Serializer.serialize(product, Product));
    }
    catch (err) {
        res.status(HttpStatus.BAD_REQUEST).json({
            detail: { errors: err.errors.map((error) => error.message) }
        });
    }
};
const removeProduct = async (req, res) => {
    const productId = await req.params.id;
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            res.status(HttpStatus.NOT_FOUND).json({
                detail: 'Product not found.'
            });
            return;
        }
        await product.destroy().catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
        res.status(HttpStatus.OK).json({
            detail: 'Product deleted'
        });
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};

const detailProduct = async (req, res) => {
    const productId = await req.params.id;
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            res.status(HttpStatus.NOT_FOUND)
                .json({
                    detail: 'Product not found.'
                });
            return;
        }
        res.json(Serializer.serialize(product, Product));
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};

const editProduct = async (req, res) => {
    const productId = await req.params.id;
    const props = await req.body;
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            res.status(HttpStatus.NOT_FOUND)
                .json({
                    detail: 'Product not found.'
                });
            return;
        }
        await product.update(props).catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
        await res.json(Serializer.serialize(product, Product));
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            detail: err
        });
    }
};
module.exports = {
    listProducts,
    createProduct,
    removeProduct,
    detailProduct,
    editProduct
};
