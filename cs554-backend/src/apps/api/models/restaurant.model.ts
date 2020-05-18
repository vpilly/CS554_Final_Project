import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { MenuItemModel, MenuItemCreateInput } from './menu-item.model';

@ObjectType('Restaurant')
export class RestaurantModel {
  @Field(type => UserModel)
  createdBy: UserModel;

  @Field()
  name: string;

  @Field()
  pricing: string;

  @Field()
  description: string;

  @Field()
  hoursOpen: string;

  @Field()
  foodType: string;

  @Field()
  location: string;

  @Field()
  isFavorite: boolean;

  @Field(type => [MenuItemModel])
  menu: MenuItemModel[];

  @Field(type => ID)
  id?: string;
}

@InputType('RestaurantCreateInput')
export class RestaurantCreateInput {
  @Field()
  name: string;

  @Field()
  pricing: string;

  @Field()
  description: string;

  @Field()
  hoursOpen: string;

  @Field()
  foodType: string;

  @Field()
  location: string;

  @Field(type => [MenuItemCreateInput])
  menu: MenuItemCreateInput[];
}

@InputType('RestaurantUpdateInput')
export class RestaurantUpdateInput {
  @Field()
  name?: string;

  @Field()
  pricing?: string;

  @Field()
  description?: string;

  @Field()
  hoursOpen?: string;

  @Field()
  foodType?: string;

  @Field()
  location?: string;

  @Field(type => [MenuItemCreateInput])
  menu?: MenuItemCreateInput[];
}
