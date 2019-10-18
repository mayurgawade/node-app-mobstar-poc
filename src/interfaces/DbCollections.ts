import { Collection } from "mongodb";

export interface DbCollections {
  employees: Collection;
  nominations: Collection;
  awards: Collection;
  itSubmission: Collection;
}
