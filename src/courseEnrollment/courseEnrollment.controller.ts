import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CourseEnrollmentService } from './courseEnrollment.service';
import { createCourseEnrollmentDto } from './dto/createCourseEnrollment';

@Controller('/courseEnrollment')
export class CourseEnrollmentController {
  constructor(
    private readonly coursesEnrollmentService: CourseEnrollmentService,
  ) {}

  @Get()
  async getCourseEnrollments() {
    const courseEnrollments =
      await this.coursesEnrollmentService.getCourseEnrollments();
    if (courseEnrollments['success'])
      return { courseEnrollments: courseEnrollments['message'] };
    else
      throw new HttpException(
        'Cannot get course enrollments',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }

  @Post()
  @UsePipes(ValidationPipe)
  async addCourseEnrollment(
    @Body() courseEnrollmentData: createCourseEnrollmentDto,
  ) {
    const addedCourseEnrollment =
      await this.coursesEnrollmentService.addCourseEnrollment(
        courseEnrollmentData,
      );

    if (addedCourseEnrollment['success'])
      return { courseEnrollment: addedCourseEnrollment['message'] };
    else
      throw new HttpException(
        'Cannot add course enrollment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
