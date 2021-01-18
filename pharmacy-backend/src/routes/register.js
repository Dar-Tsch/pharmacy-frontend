const router = require('express').Router();
const validator = require('../schemas');
const { AuthUserSchema } = require('../schemas/user');
const { registerUser } = require('../controllers/register');

router.post('/', validator.body(AuthUserSchema), registerUser);
module.exports = router;
