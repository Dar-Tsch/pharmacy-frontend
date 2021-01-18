const ErrorMiddleware = (error, req, res, next) => {
    if (error && error.error && error.error.isJoi) {
        // we had a joi error, let's return a custom 400 json response
        res.status(400).json({
            type: error.type, // will be "query" here, but could be "headers", "body", or "params"
            message: error.error.toString()
        });
    }
    else {
        res.status(error.status || 500);
        res.json(error);
    }
    next();
};

module.exports = ErrorMiddleware;
