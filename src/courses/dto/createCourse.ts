import { IsDateString, IsNotEmpty, IsString, Validate } from 'class-validator';
import { CourseExistsRule } from 'src/courses/dto/courseExists';

export class createCourseDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  courseDetails: string;
}
