export interface Vote {
  _id?: string;
  user: string; // User ID
  candidate: string; // Candidate ID
  createdAt?: Date;
  updatedAt?: Date;
}
