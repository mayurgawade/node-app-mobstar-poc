import * as dotenv from "dotenv";
dotenv.config({ path: ".env.App" });
import * as bodyParser from "body-parser";
import * as express from "express";
import { dbSetup, dbInstance } from "./configure";
import {
  tempController,
  signInController,
  nominationsController,
  getAllNominationsController,
  getNominationByIdController,
  updateNominationByIdController,
  deleteNominationByIdController,
  getAllMobStarController,
  getMobStarByUserIdController,
  itSubmissionController,
  getEmailIdListController,
  getItSubmissionController,
  updatePostLikeByIdController,
  changePasswordController,
  getNominationNominatedByController
} from "./controllers";
import { tokenVerifications } from "./middlewares";
const appPort = process.env.PORT || process.env.APP_PORT;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", tokenVerifications, tempController);
app.get("/nominations/getEmailList", getEmailIdListController);
app.post("/signin", signInController);
app.get("/nominations/:nominatedBy", getNominationNominatedByController);
app.post("/nominations", nominationsController);
app.get("/nominations", getAllNominationsController);

app.get("/nominations/:nominationsId", getNominationByIdController);
app.put("/nominations/:nominationsId", updateNominationByIdController);
app.delete("/nominations/:nominationsId", deleteNominationByIdController);
app.get("/awards/mobstar", getAllMobStarController);
app.get("/awards/mobstar/:awardedTo", getMobStarByUserIdController);

app.post("/itSubmission", itSubmissionController);
app.get("/itSubmission", getItSubmissionController);
app.put("/awards/mobstar/:awardId", updatePostLikeByIdController);

app.put("/changePassword/:employeeId", changePasswordController);
dbSetup()
  .then(collections => {
    dbInstance.employees = collections.employees;
    dbInstance.nominations = collections.nominations;
    dbInstance.awards = collections.awards;
    dbInstance.itSubmission = collections.itSubmission;
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
  .catch((error: any) => {
    console.error("Error on App bootstrap:", error);
  });
