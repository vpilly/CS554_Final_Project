import { Field, ObjectType, Int, InputType } from '@nestjs/graphql';

@ObjectType('MenuItem')
export class MenuItemModel {
  @Field()
  item: string;

  @Field(type => Int)
  price: number;
}

@InputType('MenuItemCreateInput')
export class MenuItemCreateInput {
  @Field()
  item: string;

  @Field(type => Int)
  price: number;
}
