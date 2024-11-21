//mockStudent.data.ts
//import the interface
import {Course} from "./course";

//Create a mock data array of type User and export so it is
//available to other files

export const courseList: Course[] = [
  { id: 1, subjectCode: 'MAD001', instructorName: 'Mathew Haug', isAdmin: true, email: 'mathew@myscc.ca', marks: 51, 'courseCost': 100, 'courseEnrollmentDate': new Date('2024-01-15'), imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg' },
  { id: 2, subjectCode: 'MAD002', instructorName: 'Darren', isAdmin: true, email: 'darren@myscc.ca', marks: 62, 'courseCost': 200, 'courseEnrollmentDate': new Date('2024-01-15'), imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg' },
  { id: 3, subjectCode: 'MAD003', instructorName: 'Pantula', isAdmin: false, email: 'pantula@myscc.ca', marks: 71 , 'courseCost': 300, 'courseEnrollmentDate': new Date('2024-01-15'), imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg'},
  { id: 4, subjectCode: 'MAD004', instructorName: 'Diana Nano', isAdmin: true, email: 'nano@myscc.ca', marks: 81, 'courseCost': 400, 'courseEnrollmentDate': new Date('2024-01-15'), imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg' },
  { id: 5, subjectCode: 'MAD005', instructorName: 'Manoj', isAdmin: true, email: 'manoj@myscc.ca', marks: 91 ,'courseCost': 500, 'courseEnrollmentDate': new Date('2024-01-15'), imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg'},
  { id: 6, subjectCode: 'MAD006', instructorName: 'Takaki', isAdmin: false, email: 'takaki@myscc.ca', marks: 40, 'courseCost': 600, 'courseEnrollmentDate': new Date('2024-01-15'), imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg' }
];


