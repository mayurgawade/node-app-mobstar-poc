"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
const jwt = require("jsonwebtoken");
const expiresIn = 86400;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
exports.signInController = (req, res) => {
    configure_1.dbInstance.employees
        .findOne({ email: req.body.email })
        .then((emp) => {
        if (!emp) {
            res.send(utils_1.responseFail(440, "Employee email not exist"));
        }
        if (!bcrypt.compareSync(req.body.password, emp.password)) {
            res.send(utils_1.responseFail(440, "Password send does not match"));
        }
        delete emp.password;
        const token = jwt.sign({ employee: emp }, JWT_SECRET_KEY, {
            expiresIn: expiresIn
        });
        res.send(utils_1.responseSuccess(220, "Signin Successful", {
            employee: emp,
            Token: token
        }));
    })
        .catch(err => {
        console.log("employee findone failed");
        res.send(utils_1.responseFail(440, "Internal server Error"));
    });
};
//# sourceMappingURL=post.signIn.controller.js.map