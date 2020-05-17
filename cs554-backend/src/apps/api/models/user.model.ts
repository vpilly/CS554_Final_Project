import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserModel {
  @Field(type => ID)
  uid?: string;

  @Field()
  email: string;

  @Field()
  displayName?: string;
}
