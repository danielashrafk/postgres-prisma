import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserRole, CourseEnrollment } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class CourseEnrollmentService {
  async getCourseEnrollments() {
    try {
      const courses = await prisma.courseEnrollment.findMany();
      return { success: true, message: courses };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  async addCourseEnrollment({
    role,
    userId,
    courseId,
  }: Partial<CourseEnrollment>) {
    try {
      const newCourseEnrollment = await prisma.courseEnrollment.create({
        data: {
          role,
          userId,
          courseId,
        },
      });

      return { success: true, message: newCourseEnrollment };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  async findCourseEnrollment(role: UserRole, userId: string, courseId: string) {
    const courseEnrollment = await prisma.courseEnrollment.findFirst({
      where: {
        role: role,
        userId: userId,
        courseId: courseId,
      },
    });
    if (!courseEnrollment)
      throw new HttpException(
        'Cannot find course enrollment',
        HttpStatus.NOT_FOUND,
      );
    return courseEnrollment;
  }
}
