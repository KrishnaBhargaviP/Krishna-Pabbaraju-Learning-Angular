export interface Course {
  id: number;
  subjectCode: string;
  instructorName: string;
  isAdmin?: boolean;
  email: string;
  marks: number;
  courseCost: number;
  courseEnrollmentDate: Date;
  imageUrl: string;
}
