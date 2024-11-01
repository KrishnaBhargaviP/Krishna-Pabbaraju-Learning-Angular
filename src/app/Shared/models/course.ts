export interface Course {
  id: number;
  subjectCode: string;
  instructorName: string;
  isAdmin?: boolean;
  email: string;
  marks: number;
  imageUrl: string;
}
