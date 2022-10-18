import { Module } from '@nestjs/common';
import { CourseEnrollmentController } from './courseEnrollment.controller';
import { CourseEnrollmentService } from './courseEnrollment.service';

@Module({
  controllers: [CourseEnrollmentController],
  providers: [CourseEnrollmentService],
})
export class CourseEnrollmentModule {}
