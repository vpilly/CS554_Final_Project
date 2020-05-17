import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { RestaurantModel } from './restaurant.model';

@ObjectType('Favorite')
export class FavoriteModel {
  @Field(type => UserModel)
  user: UserModel;

  @Field(type => RestaurantModel)
  restaurant: RestaurantModel;

  @Field(type => ID)
  id?: string;
}

@InputType('FavoriteCreateInput')
export class FavoriteCreateInput {
  @Field()
  restaurantId: string;
}
