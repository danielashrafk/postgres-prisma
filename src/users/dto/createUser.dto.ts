import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class createUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  social: OptionalJSON<JSON>;
}
