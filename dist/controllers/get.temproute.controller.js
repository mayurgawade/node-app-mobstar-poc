"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
exports.tempController = (req, res) => {
    res.send(utils_1.responseSuccess(220, "hello successful", { resdata: "hello World" }));
};
//# sourceMappingURL=get.temproute.controller.js.map