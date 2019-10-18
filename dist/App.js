"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: ".env.App" });
const bodyParser = require("body-parser");
const express = require("express");
const configure_1 = require("./configure");
const controllers_1 = require("./controllers");
const middlewares_1 = require("./middlewares");
const appPort = process.env.PORT || process.env.APP_PORT;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", middlewares_1.tokenVerifications, controllers_1.tempController);
app.get("/nominations/getEmailList", controllers_1.getEmailIdListController);
app.post("/signin", controllers_1.signInController);
app.get("/nominations/:nominatedBy", controllers_1.getNominationNominatedByController);
app.post("/nominations", controllers_1.nominationsController);
app.get("/nominations", controllers_1.getAllNominationsController);
app.get("/nominations/:nominationsId", controllers_1.getNominationByIdController);
app.put("/nominations/:nominationsId", controllers_1.updateNominationByIdController);
app.delete("/nominations/:nominationsId", controllers_1.deleteNominationByIdController);
app.get("/awards/mobstar", controllers_1.getAllMobStarController);
app.get("/awards/mobstar/:awardedTo", controllers_1.getMobStarByUserIdController);
app.post("/itSubmission", controllers_1.itSubmissionController);
app.get("/itSubmission", controllers_1.getItSubmissionController);
app.put("/awards/mobstar/:awardId", controllers_1.updatePostLikeByIdController);
app.put("/changePassword/:employeeId", controllers_1.changePasswordController);
configure_1.dbSetup()
    .then(collections => {
    configure_1.dbInstance.employees = collections.employees;
    configure_1.dbInstance.nominations = collections.nominations;
    configure_1.dbInstance.awards = collections.awards;
    configure_1.dbInstance.itSubmission = collections.itSubmission;
    return true;
})
    .then(() => {
    app.listen(appPort, () => {
        console.log(`App is running at http://localhost:${appPort}`);
        console.info("Press CTRL-C to stop \n");
        process.on("unhandledRejection", error => {
            console.log("unhandledRejection", error.message);
        });
    });
})
    .catch((error) => {
    console.error("Error on App bootstrap:", error);
});
//# sourceMappingURL=App.js.map