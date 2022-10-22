import { Module } from '@nestjs/common';
import { UserExistsRule } from './dto/userExists';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserExistsRule, UsersResolver],
})
export class UsersModule {}
