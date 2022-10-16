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
import { createTestDto } from './dto/createTest';
import { TestsService } from './tests.service';

@Controller('/tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get()
  async getTests() {
    const tests = await this.testsService.getTests();
    if (tests['success']) return { tests: tests['message'] };
    else
      throw new HttpException(
        'Cannot get tests',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }

  @Post()
  @UsePipes(ValidationPipe)
  async addTest(@Body() testData: createTestDto) {
    const addedTest = await this.testsService.addTest(
      testData.name,
      testData.date,
      testData.courseId,
    );

    if (addedTest['success']) return { test: addedTest['message'] };
    else
      throw new HttpException(
        'Cannot add test',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
