import { UserRole } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString, Validate } from 'class-validator';
import { CourseExistsRule } from 'src/courses/dto/courseExists';
import { UserExistsRule } from 'src/users/dto/userExists';

export class createCourseEnrollmentDto {
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
  @IsNotEmpty()
  @IsString()
  @Validate(UserExistsRule)
  userId: string;
  @IsNotEmpty()
  @IsString()
  @Validate(CourseExistsRule)
  courseId: string;
}
