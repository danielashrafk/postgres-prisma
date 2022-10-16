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
import { CoursesService } from './courses.service';
import { createCourseDto } from './dto/createCourse';

@Controller('/courses')
export class CoursesContorller {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    if (courses['success']) return { courses: courses['message'] };
    else
      throw new HttpException(
        'Cannot get courses',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }

  @Post()
  @UsePipes(ValidationPipe)
  async addCourse(@Body() courseData: createCourseDto) {
    const addedCourse = await this.coursesService.addCourse(
      courseData.name,
      courseData.courseDetails,
    );

    if (addedCourse['success']) return { course: addedCourse['message'] };
    else
      throw new HttpException(
        'Cannot add course',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
