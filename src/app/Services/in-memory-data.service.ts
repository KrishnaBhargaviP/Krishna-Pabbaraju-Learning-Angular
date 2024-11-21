// @ts-ignore
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Course} from "../Shared/models/course";

export class InMemoryDataService implements InMemoryDbService {
  //returns an object with a students property,
  // which is an array of User objects
  createDb():{courses: Course[]} {
    /*
    Inside the method, a constant array named students is defined,
    containing several User objects. Each User object represents a
    student with properties such as id, firstName, lastName,
     department, and isAdmin. For example, one of the User objects is
     */
    const courses: Course[] = [

      { id: 1,
        subjectCode: 'MAD001',
        instructorName: 'Mathew Haug',
        isAdmin: true,
        email: 'mathew@myscc.ca',
        marks: 10,
        'courseCost': 100,
        'courseEnrollmentDate': new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg' },
      { id: 2,
        subjectCode: 'MAD002',
        instructorName: 'Darren',
        isAdmin: true,
        email: 'darren@myscc.ca',
        marks: 10,
        'courseCost': 200,
        'courseEnrollmentDate': new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg' },
      { id: 3,
        subjectCode: 'MAD003',
        instructorName: 'Pantula',
        isAdmin: false,
        email: 'pantula@myscc.ca',
        marks: 10 ,
        'courseCost': 300,
        'courseEnrollmentDate': new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg'},
      { id: 4,
        subjectCode: 'MAD004',
        instructorName: 'Diana Nano',
        isAdmin: true,
        email: 'nano@myscc.ca',
        marks: 10,
        'courseCost': 400,
        'courseEnrollmentDate': new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg' },
      { id: 5,
        subjectCode: 'MAD005',
        instructorName: 'Manoj',
        isAdmin: true,
        email: 'manoj@myscc.ca',
        marks: 10 ,
        'courseCost': 500,
        'courseEnrollmentDate': new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg'},
      { id: 6,
        subjectCode: 'MAD006',
        instructorName: 'Takaki',
        isAdmin: false,
        email: 'takaki@myscc.ca',
        marks: 10,
        'courseCost': 600,
        'courseEnrollmentDate': new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg' }


    ];
    return { courses };
  }
}
