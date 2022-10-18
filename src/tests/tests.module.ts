import { Module } from '@nestjs/common';
import { TestExistsRule } from './dto/testExists';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';

@Module({
  controllers: [TestsController],
  providers: [TestsService, TestExistsRule],
})
export class TestsModule {}
