import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { RestaurantModel } from './restaurant.model';

@ObjectType('Reservation')
export class ReservationModel {
  @Field(type => UserModel)
  user: UserModel;

  @Field(type => RestaurantModel)
  restaurant: RestaurantModel;

  @Field()
  reservationTime: Date;

  @Field(type => ID)
  id?: string;
}

@InputType('ReservationCreateInput')
export class ReservationCreateInput {
  @Field()
  restaurantId: string;
  @Field()
  reservationTime: Date;
}
