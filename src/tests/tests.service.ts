import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { dateToString } from 'src/utils/dates';

const prisma = new PrismaClient();

@Injectable()
export class TestsService {
  async getTests() {
    try {
      const tests = await prisma.test.findMany();
      return { success: true, message: tests };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  async addTest(name: string, strDate: string, courseId: string) {
    try {
      const date = dateToString(strDate);
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
      return { success: false, message: error };
    }
  }
}
