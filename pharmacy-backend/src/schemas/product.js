const Joi = require('joi');

const ProductSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().optional(),
    imageUrl: Joi.string().optional(),
    productTypeId: Joi.number().optional(),
    productPurposeId: Joi.number().optional()
});
const UpdateProductSchema = Joi.object({
    title: Joi.string().optional(),
    price: Joi.number().optional(),
    description: Joi.string().optional(),
    imageUrl: Joi.string().optional(),
    productTypeId: Joi.number().optional(),
    productPurposeId: Joi.number().optional()
});

module.exports = {
    ProductSchema,
    UpdateProductSchema
};
