const Joi = require('joi');

const ProductTypeSchema = Joi.object({
    name: Joi.string().required()
});
const UpdateProductTypeSchema = Joi.object({
    name: Joi.string().optional()
});

module.exports = {
    ProductTypeSchema,
    UpdateProductTypeSchema
};
