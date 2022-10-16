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
import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();
    if (users['success']) return { users: users['message'] };
    else
      throw new HttpException(
        'Cannot get users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }

  @Post()
  @UsePipes(ValidationPipe)
  async addUser(@Body() userData: createUserDto) {
    const addedUser = await this.usersService.addUser(
      userData.email,
      userData.firstName,
      userData.lastName,
      userData.social,
    );

    if (addedUser['success']) return { user: addedUser['message'] };
    else
      throw new HttpException(
        'Cannot add user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}
