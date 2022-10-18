import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, TestResult } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TestResultsService {
  async getTestResults() {
    try {
      const testResults = await prisma.testResult.findMany();
      return { success: true, message: testResults };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  async addTestResult({
    result,
    testId,
    studentId,
    graderId,
  }: Partial<TestResult>) {
    try {
      const newtestResult = await prisma.testResult.create({
        data: {
          result,
          testId,
          studentId,
          graderId,
        },
      });

      return { success: true, message: newtestResult };
    } catch (error) {
      return { success: false, message: error };
    }
  }
}
