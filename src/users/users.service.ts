import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

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

  async addUser({ email, firstName, lastName, social }: Partial<User>) {
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

  async findUser(userId: string) {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user)
      throw new HttpException('Cannot find test', HttpStatus.NOT_FOUND);
    return test;
  }
}
