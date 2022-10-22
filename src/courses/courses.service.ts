import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CoursesService {
  async getCourses() {
    try {
      const courses = await prisma.course.findMany();
      return { success: true, message: courses };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async addCourse({ name, courseDetails }: Partial<Course>) {
    try {
      const newCourse = await prisma.course.create({
        data: {
          name,
          courseDetails,
        },
      });

      return { success: true, message: newCourse };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async findCourse(courseId: string) {
    const course = await prisma.course.findFirst({
      where: {
        id: courseId,
      },
    });

    if (!course)
      throw new HttpException('Cannot find course', HttpStatus.NOT_FOUND);
    return course;
  }
}
