import { IsDateString, IsNotEmpty, IsString, Validate } from 'class-validator';
import { CourseExistsRule } from 'src/courses/dto/courseExists';

export class createTestDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsDateString()
  date: string;
  @Validate(CourseExistsRule)
  courseId: string;
}
