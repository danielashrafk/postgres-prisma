import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createTestResultDto } from './dto/createTestResult';
import { TestResultsService } from './testResults.service';

@Controller('/testResults')
export class TestResultsController {
  constructor(private readonly testResultsService: TestResultsService) {}

  @Get()
  async getTestResults() {
    const testResults = await this.testResultsService.getTestResults();
    if (testResults['success']) return { testResults: testResults['message'] };
    else
      throw new HttpException(
        'Cannot get test results',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }

  @Post()
  @UsePipes(ValidationPipe)
  async addCTestResult(@Body() testResultData: createTestResultDto) {
    const addedTestResult = await this.testResultsService.addTestResult(
      testResultData,
    );

    if (addedTestResult['success'])
      return { testResult: addedTestResult['message'] };
    else
      throw new HttpException(
        'Cannot add test result',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
