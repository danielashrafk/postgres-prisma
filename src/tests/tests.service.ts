import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, Test } from '@prisma/client';
import { dateToString } from 'src/utils/dates';

const prisma = new PrismaClient();

@Injectable()
export class TestsService {
  async getTests() {
    try {
      const tests = await prisma.test.findMany();
      return { success: true, message: tests };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async addTest({ name, courseId }: Partial<Test>, _date: string) {
    try {
      const date = dateToString(_date);
      const newTest = await prisma.test.create({
        data: {
          name,
          date,
          courseId,
        },
      });

      return { success: true, message: newTest };
    } catch (error) {
      console.log(error);
      return { success: false, message: error.message };
    }
  }

  async findTest(testId: string) {
    const test = await prisma.test.findFirst({
      where: {
        id: testId,
      },
    });
    if (!test)
      throw new HttpException('Cannot find test', HttpStatus.NOT_FOUND);
    return test;
  }
}
