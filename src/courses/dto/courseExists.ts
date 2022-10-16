import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CoursesService } from 'src/courses/courses.service';

@ValidatorConstraint({ name: 'CourseExists', async: true })
@Injectable()
export class CourseExistsRule implements ValidatorConstraintInterface {
  constructor(private courseService: CoursesService) {}

  async validate(courseId: string) {
    try {
      await this.courseService.findCourse(courseId);
    } catch (e) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Course doesn't exist`;
  }
}
