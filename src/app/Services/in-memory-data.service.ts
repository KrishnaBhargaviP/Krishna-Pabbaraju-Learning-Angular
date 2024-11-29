import { InMemoryDbService } from 'angular-in-memory-web-api';

// Course Interface
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

export class InMemoryDataService implements InMemoryDbService {
  // Method to create the database
  createDb(): { courses: Course[] } {
    // Initial courses
    const courses: Course[] = [
      {
        id: 1,
        subjectCode: 'MAD001',
        instructorName: 'Mathew Haug',
        isAdmin: true,
        email: 'mathew@myscc.ca',
        marks: 51,
        courseCost: 100,
        courseEnrollmentDate: new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg',
      },
      {
        id: 2,
        subjectCode: 'MAD002',
        instructorName: 'Darren',
        isAdmin: true,
        email: 'darren@myscc.ca',
        marks: 62,
        courseCost: 200,
        courseEnrollmentDate: new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg',
      },
      {
        id: 3,
        subjectCode: 'MAD003',
        instructorName: 'Pantula',
        isAdmin: false,
        email: 'pantula@myscc.ca',
        marks: 71,
        courseCost: 300,
        courseEnrollmentDate: new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg',
      },
      {
        id: 4,
        subjectCode: 'MAD004',
        instructorName: 'Diana Nano',
        isAdmin: true,
        email: 'nano@myscc.ca',
        marks: 81,
        courseCost: 400,
        courseEnrollmentDate: new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg',
      },
      {
        id: 5,
        subjectCode: 'MAD005',
        instructorName: 'Manoj',
        isAdmin: true,
        email: 'manoj@myscc.ca',
        marks: 91,
        courseCost: 500,
        courseEnrollmentDate: new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg',
      },
      {
        id: 6,
        subjectCode: 'MAD006',
        instructorName: 'Takaki',
        isAdmin: false,
        email: 'takaki@myscc.ca',
        marks: 40,
        courseCost: 600,
        courseEnrollmentDate: new Date('2024-01-15'),
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Python_image.jpg',
      },
    ];

    // Function to generate additional courses
    const generateAdditionalCourses = (
      count: number,
      baseCourses: Course[]
    ): Course[] => {
      let additionalCourses: Course[] = [];
      let id = baseCourses.length + 1;

      for (let i = 0; i < count; i++) {
        const randomBaseCourse = baseCourses[i % baseCourses.length];
        const newCourse: Course = {
          id: id++,
          subjectCode: `${randomBaseCourse.subjectCode}`,
          instructorName: `${randomBaseCourse.instructorName}`,
          email: `${randomBaseCourse.email}`,
          marks: Math.floor(Math.random() * 101), // Random marks between 0 and 100
          courseCost: randomBaseCourse.courseCost + 100,
          courseEnrollmentDate: new Date(),
          imageUrl: randomBaseCourse.imageUrl,
        };
        additionalCourses.push(newCourse);
      }
      return additionalCourses;
    };

    // Generate additional courses to reach 30 total
    const allCourses = [
      ...courses,
      ...generateAdditionalCourses(30 - courses.length, courses),
    ];
    console.log("courses",allCourses)
    return { courses: allCourses };
  }
}
