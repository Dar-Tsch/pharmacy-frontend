const { User } = require('../db/models');
const { HttpStatus } = require('../utils/http');
const Serializer = require('../serializer');

const registerUser = async (req, res) => {
    const props = await req.body;
    try {
        const user = await User.create(props);
        await res.status(HttpStatus.CREATED).json(Serializer.serialize(user, User));
    }
    catch (err) {
        res.status(HttpStatus.BAD_REQUEST).json({
            detail: { errors: err.errors.map((error) => error.message) }
        });
    }
};
module.exports = {
    registerUser
};
