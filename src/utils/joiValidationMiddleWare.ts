
import * as Joi from "joi";
import { SchemaLike } from "joi";
import { Request, Response, NextFunction } from "express";

const opts = { abortEarly: false }

export const validateBody = (schema: SchemaLike) => {
    return (req: Request, res: Response, next: NextFunction) => {
        validate(req.body, res, next, schema);
    }
}

const validateQuery = (schema: SchemaLike) => {
    return (req: Request, res: Response, next: NextFunction) => {
        validate(req, res, next, schema);
    }
}

const validateParams = (schema: SchemaLike) => {
    return (req: Request, res: Response, next: NextFunction) => {
        validate(req, res, next, schema);
    }
}

const validate = (contextToValidate: object, res: Response, next: NextFunction, schema: SchemaLike) => {
    Joi.validate(contextToValidate, schema, opts, err => {
        if (!err) return next()
        res.status(400).send(err)
    })
}

