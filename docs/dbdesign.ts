// This file consist of database structure for the collections created in the database

export const employees = [
  {
    _id: "uiId",
    profilePic: "string",
    email: "string",
    name: "string",
    password: "hashPassword",
    designations: ["string", "string"],
    officeLocation: "string",
    timestamp: "string"
  }
];

export const nominations = [
  {
    _id: "uiid",
    timestamp: "isodate",
    nominatedTo: "employee.emailId",
    nominatedBy: "employee.emailId",
    nominationCategory: "string",
    nominationReasons: "reason string1",
    nominationConsidered: "boolean"
  }
];

export const awards = [
  {
    _id: "uiid",
    timestamp: "isodate",
    awardCategory: "string",
    awardedTo: "employee.emailId",
    officeLocation: "employee.officeLocation",
    nominationIds: ["nominations.id"],
    awardDescription: "string",
    likes: "employees.name",
    comments: ["string", "employees.name"]
  }
];
export const itSubmission = [
  {
    _id: "docId",
    timestamp: "isodate",
    userId: "uiid",
    docName: "string",
    docType: "string",
    docPath: ["string", "string"]
  }
];
