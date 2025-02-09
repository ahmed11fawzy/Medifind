const { validationResult } = require('express-validator');

module.exports = {
    insertedUserErrors: (req, res, next) => {
        const errors = validationResult(req);
        let message = errors.array().map((error) => error.msg).join(',');
        let error = new Error(message)
        if (!errors.isEmpty()) {
            error.status = 405;
            next(error);
        }
        next();
    }
}