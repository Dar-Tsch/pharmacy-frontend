const router = require('express').Router();
const validator = require('../schemas');
const { AuthUserSchema } = require('../schemas/user');
const { login } = require('../controllers/login');

router.post('/', validator.body(AuthUserSchema), login);
module.exports = router;
