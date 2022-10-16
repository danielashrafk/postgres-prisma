import { Module } from '@nestjs/common';
import { CoursesContorller } from './courses.controller';
import { CoursesService } from './courses.service';
import { CourseExistsRule } from './dto/courseExists';

@Module({
  controllers: [CoursesContorller],
  providers: [CoursesService, CourseExistsRule],
})
export class CoursesModule {}
