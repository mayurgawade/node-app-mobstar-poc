"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const mongodb_1 = require("mongodb");
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
exports.changePasswordController = (req, res) => {
    const id = req.params.employeeId;
    const hashPassword = req.body.password;
    const newPassword = bcrypt.hashSync(hashPassword);
    configure_1.dbInstance.employees
        .findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { $set: { password: newPassword } }, { returnOriginal: false })
        .then(updatedEmployee => {
        res.send(utils_1.responseSuccess(200, "Employee Password updated in  database", updatedEmployee.value));
    })
        .catch(err => {
        console.log("Error in updating  password", err);
        res.send(utils_1.responseFail(440, "Error in geting updating employee information"));
    });
};
//# sourceMappingURL=put.changePassword.controller.js.map