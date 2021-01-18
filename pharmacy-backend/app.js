const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
const api = require('./src/routes');
const ErrorMiddleware = require('./src/middlewares/error');

const app = express();

app.use(cors({
    allowCredentials: true
}));

app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use('/api', api);
app.use(ErrorMiddleware);
module.exports = app;
