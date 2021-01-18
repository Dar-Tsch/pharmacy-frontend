const { db } = require('../../../config');

module.exports = {
    development: {
        username: db.USER,
        password: db.PASSWORD,
        database: db.NAME,
        host: db.HOST,
        dialect: 'postgres'
    },
    test: {
        username: db.USER,
        password: db.PASSWORD,
        database: db.NAME,
        host: db.HOST,
        dialect: 'postgres'
    },
    production: {
        username: db.USER,
        password: db.PASSWORD,
        database: db.NAME,
        host: db.HOST,
        dialect: 'postgres'
    }
};
