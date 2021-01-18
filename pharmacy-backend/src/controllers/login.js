const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY, JWT_EXPIRES_IN } = require('../../config');
const { User } = require('../db/models');
const { HttpStatus } = require('../utils/http');
const Serializer = require('../serializer');

const login = async (req, res) => {
    const { email, password } = await req.body;
    try {
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (!user) {
            await res.status(HttpStatus.NOT_FOUND).json({
                detail: 'User not found.'
            });
            return;
        }
        const isVerified = await bcrypt.compare(password, user.password);
        if (!isVerified) {
            await res.status(HttpStatus.UNAUTHORIZED).json({
                detail: 'Invalid username or password.'
            });
        }
        const token = jwt.sign({
            data: {
                id: user.id
            }
        }, SECRET_KEY, { expiresIn: JWT_EXPIRES_IN });
        await res.json({
            user: Serializer.serialize(user, User),
            token
        });
    }
    catch (e) {
        res.status(HttpStatus.NOT_FOUND).json({
            detail: 'user not found.'
        });
    }
};

module.exports = {
    login
};
