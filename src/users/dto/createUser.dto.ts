import { Field, InputType } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class createUserDto {
  @Field()
  @IsEmail()
  email: string;
  @Field()
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @Field()
  @IsNotEmpty()
  @IsString()
  lastName: string;
  // @Field()
  // social: User['social'];
}
