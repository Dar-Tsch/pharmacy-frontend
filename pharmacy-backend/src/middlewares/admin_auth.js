const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { SECRET_KEY } = require('../../config');
const { User } = require('../db/models');
const { HttpStatus } = require('../utils/http');

const verify = promisify(jwt.verify);

const AdminAuthMiddleware = async (req, res, next) => {
    const bearerHeader = await req.headers.authorization;
    if (!bearerHeader || !bearerHeader.length) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ detail: 'Missing Bearer token.' });
        return;
    }
    const token = bearerHeader.replace('Bearer', '').split(' ')[1];
    try {
        const jwtIdentity = await verify(token, SECRET_KEY);
        const user = await User.findByPk(jwtIdentity.data.id);
        if (!user) {
            res.status(HttpStatus.NOT_FOUND).json({
                detail: 'User not found.'
            });
            return;
        }
        if (!user.isAdmin) {
            res.status(HttpStatus.PRECONDITION_FAILED).json({
                detail: 'Only admin users allowed.'
            });
            return;
        }
        next();
    }
    catch (error) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
            detail: error
        });
    }
};

module.exports = AdminAuthMiddleware;
