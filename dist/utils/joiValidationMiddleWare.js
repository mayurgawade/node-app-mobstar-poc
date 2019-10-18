"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const opts = { abortEarly: false };
exports.validateBody = (schema) => {
    return (req, res, next) => {
        validate(req.body, res, next, schema);
    };
};
const validateQuery = (schema) => {
    return (req, res, next) => {
        validate(req, res, next, schema);
    };
};
const validateParams = (schema) => {
    return (req, res, next) => {
        validate(req, res, next, schema);
    };
};
const validate = (contextToValidate, res, next, schema) => {
    Joi.validate(contextToValidate, schema, opts, err => {
        if (!err)
            return next();
        res.status(400).send(err);
    });
};
//# sourceMappingURL=joiValidationMiddleWare.js.map