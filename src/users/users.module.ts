import { Module } from '@nestjs/common';
import { UserExistsRule } from './dto/userExists';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserExistsRule],
})
export class UsersModule {}
