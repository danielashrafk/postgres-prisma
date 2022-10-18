import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseEnrollmentModule } from './courseEnrollment/courseEnrollment.module';
import { CoursesModule } from './courses/courses.module';
import { CoursesService } from './courses/courses.service';
import { CourseExistsRule } from './courses/dto/courseExists';
import { TestResultsModule } from './testResults/testResults.module';
import { TestExistsRule } from './tests/dto/testExists';
import { TestsModule } from './tests/tests.module';
import { TestsService } from './tests/tests.service';
import { UserExistsRule } from './users/dto/userExists';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    UsersModule,
    CoursesModule,
    TestsModule,
    TestResultsModule,
    CourseEnrollmentModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UsersService,
    UserExistsRule,
    TestsService,
    TestExistsRule,
    CoursesService,
    CourseExistsRule,
  ],
})
export class AppModule {}
