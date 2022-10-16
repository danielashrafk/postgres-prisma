import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const { v1: uuidv1 } = require('uuid');

@Injectable()
export class UsersService {
  async getUsers() {
    try {
      const users = await prisma.user.findMany();
      return { success: true, message: users };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  async addUser(
    email: string,
    firstName: string,
    lastName: string,
    social: OptionalJSON<JSON>,
  ) {
    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          social,
        },
      });

      return { success: true, message: newUser };
    } catch (error) {
      return { success: false, message: error };
    }
  }
}
