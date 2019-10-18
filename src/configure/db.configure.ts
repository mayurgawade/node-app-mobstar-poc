// In this file we configure the database server and make connection with mongodb database server

import { MongoClient } from "mongodb";
import { DbCollections } from "./../interfaces";
const url =
  <string>process.env.MONGODB_URI || "mongodb://localhost:27017/Mob_OnRamp_DB";

export const dbInstance = <DbCollections>{};

export const dbSetup = (): Promise<DbCollections> => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      url,
      { useNewUrlParser: true },
      function(err: any, client: MongoClient) {
        if (err) {
          console.log("Mongo Connection Error : " + err);
          reject(err);
        }
        console.log("Mongo Connection Success");
        const MobOnRampDB = client.db("Mob_OnRamp_DB");
        const collections: DbCollections = {
          employees: MobOnRampDB.collection("employees"),
          nominations: MobOnRampDB.collection("nominations"),
          itSubmission: MobOnRampDB.collection("itSubmission"),
          awards: MobOnRampDB.collection("awards")
        };
        resolve(collections);
      }
    );
  });
};
