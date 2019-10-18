export interface Nominations {
  _id: string;
  timestamp: string;
  nominatedTo: string;
  nominatedBy: string;
  nominationCategory: string;
  nominationReason: string;
  nominationConsidered: boolean;
}
