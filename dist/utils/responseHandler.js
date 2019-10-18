"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = require("moment");
exports.responseSuccess = function (statusCode = 200, msg = "Success", data) {
    return {
        success: true,
        statusCode: statusCode,
        message: msg,
        data: data,
        timestamp: moment_1.now()
    };
};
exports.responseFail = function (statusCode = 400, msg = "Failed") {
    return {
        success: false,
        statusCode: statusCode,
        message: msg,
        data: undefined,
        timestamp: moment_1.now()
    };
};
//# sourceMappingURL=responseHandler.js.map