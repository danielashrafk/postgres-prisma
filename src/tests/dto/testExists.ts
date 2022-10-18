import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TestsService } from 'src/tests/tests.service';

@ValidatorConstraint({ name: 'TestExists', async: true })
@Injectable()
export class TestExistsRule implements ValidatorConstraintInterface {
  constructor(private testsService: TestsService) {}

  async validate(testId: string) {
    try {
      await this.testsService.findTest(testId);
    } catch (e) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Test doesn't exist`;
  }
}
