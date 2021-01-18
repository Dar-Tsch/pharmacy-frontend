const Joi = require('joi');

const AuthUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

module.exports = {
    AuthUserSchema
};
