"use strict";
// In this file we created JSON Web Token for authorization purpose
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
exports.tokenVerifications = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.send(utils_1.responseFail(4000, "Please send authorization token"));
        return;
    }
    jwt.verify(token, JWT_SECRET_KEY, function (err, decodedTokenEmp) {
        if (err) {
            console.log("Token decode failed", err);
            res.send(utils_1.responseFail(4000, "Authorization token invalid"));
            return;
        }
        if (!decodedTokenEmp) {
            res.send(utils_1.responseFail(4000, "Authorization token invalid"));
            return;
        }
        next();
    });
};
//# sourceMappingURL=tokenVerification.js.map