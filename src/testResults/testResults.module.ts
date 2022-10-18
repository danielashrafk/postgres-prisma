import { Module } from '@nestjs/common';
import { TestResultsController } from './testResults.controller';
import { TestResultsService } from './testResults.service';

@Module({
  controllers: [TestResultsController],
  providers: [TestResultsService],
})
export class TestResultsModule {}
