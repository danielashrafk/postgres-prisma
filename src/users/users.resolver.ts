import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createUserDto } from './dto/createUser.dto';
import { getUserDto } from './dto/getUser.dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  async getUser(@Args() getUserArgs: getUserDto): Promise<{ user: User }> {
    const user = await this.usersService.findUser(getUserArgs.id);
    if (user['success']) return { user: user['message'] };
    else throw new HttpException('Cannot find user', HttpStatus.BAD_REQUEST);
  }

  @Query(() => [User])
  async getUsers(): Promise<{ users: User[] }> {
    const users = await this.usersService.getUsers();

    if (users['success']) return users['message'];
    else throw new HttpException('Cannot get users', HttpStatus.BAD_REQUEST);
  }

  @Mutation(() => User)
  async addUser(
    @Args('createUserData') createUserData: createUserDto,
  ): Promise<{ user: User }> {
    const addedUser = await this.usersService.addUser(createUserData);
    if (addedUser['success']) return addedUser['message'];
    else throw new HttpException('Cannot add user', HttpStatus.BAD_REQUEST);
  }
}
