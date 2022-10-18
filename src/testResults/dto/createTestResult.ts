import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator';
import { TestExistsRule } from 'src/tests/dto/testExists';
import { UserExistsRule } from 'src/users/dto/userExists';

export class createTestResultDto {
  @IsNotEmpty()
  @IsNumber()
  result: number;
  @IsNotEmpty()
  @IsString()
  @Validate(TestExistsRule)
  testId: string;
  @IsNotEmpty()
  @IsString()
  @Validate(UserExistsRule)
  userId: string;
  @IsNotEmpty()
  @IsString()
  @Validate(UserExistsRule)
  graderId: string;
}
