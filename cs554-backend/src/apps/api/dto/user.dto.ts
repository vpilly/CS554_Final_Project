import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class UserInput {
  @Field()
  @MaxLength(30)
  name: string;
}
