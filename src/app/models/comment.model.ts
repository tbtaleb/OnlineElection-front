export interface Comment {
  _id?: string;
  user: string; // User ID
  candidate: string; // Candidate ID
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}
