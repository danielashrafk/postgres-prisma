import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TestsModule } from './tests/tests.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, CoursesModule, TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
