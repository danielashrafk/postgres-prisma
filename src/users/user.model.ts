import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;
  @Field()
  updatedAt: Date;
  @Field()
  createdAt: Date;
  @Field()
  email: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field({ nullable: true })
  social?: string;
  // courses:     CourseEnrollment[]
  // testResults: TestResult[]
  // testsGraded: TestResult[]
}
