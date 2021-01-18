const Joi = require('joi');

const ProductPurposeSchema = Joi.object({
    name: Joi.string().required()
});
const UpdateProductPurposeSchema = Joi.object({
    name: Joi.string().optional()
});

module.exports = {
    ProductPurposeSchema,
    UpdateProductPurposeSchema
};
