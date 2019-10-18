"use strict";
// In this file we configure the database server and make connection with mongodb database server
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/Mob_OnRamp_DB";
exports.dbInstance = {};
exports.dbSetup = () => {
    return new Promise((resolve, reject) => {
        mongodb_1.MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            if (err) {
                console.log("Mongo Connection Error : " + err);
                reject(err);
            }
            console.log("Mongo Connection Success");
            const MobOnRampDB = client.db("Mob_OnRamp_DB");
            const collections = {
                employees: MobOnRampDB.collection("employees"),
                nominations: MobOnRampDB.collection("nominations"),
                itSubmission: MobOnRampDB.collection("itSubmission"),
                awards: MobOnRampDB.collection("awards")
            };
            resolve(collections);
        });
    });
};
//# sourceMappingURL=db.configure.js.map