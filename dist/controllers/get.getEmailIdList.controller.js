"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../utils/index");
const index_2 = require("../configure/index");
exports.getEmailIdListController = (req, res) => {
    index_2.dbInstance.employees
        .find({})
        .toArray()
        .then(function (result) {
        res.send(index_1.responseSuccess(200, "Employee Data retrive from database", result));
    })
        .catch(err => {
        console.log("Error in getting all employee", err);
        res.send(index_1.responseFail(440, "Error in geting all employee"));
    });
};
//# sourceMappingURL=get.getEmailIdList.controller.js.map