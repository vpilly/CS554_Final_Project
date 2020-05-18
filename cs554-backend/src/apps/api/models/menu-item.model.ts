import { Field, ObjectType, InputType, Float } from '@nestjs/graphql';

@ObjectType('MenuItem')
export class MenuItemModel {
  @Field()
  item: string;

  @Field(type => Float)
  price: number;
}

@InputType('MenuItemCreateInput')
export class MenuItemCreateInput {
  @Field()
  item: string;

  @Field(type => Float)
  price: number;
}
