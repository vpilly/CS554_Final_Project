import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import {
  RestaurantModel,
  RestaurantCreateInput,
  UserModel,
  RestaurantUpdateInput,
} from '../../models';
import { AuthService } from '../../services/auth/auth.service';
import { RestaurantService } from 'src/libs/data-access/services';
import { Request } from 'express';
import { Restaurant } from 'src/libs/mongoose/schemas';

@Resolver(() => RestaurantModel)
export class RestaurantResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly restaurantService: RestaurantService,
  ) {}
  @Mutation(returns => RestaurantModel)
  async createRestaurant(
    @Args('data') input: RestaurantCreateInput,
    @Context() ctx: Request,
  ): Promise<Restaurant> {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    return this.restaurantService.create({ ...input, createdBy: user.uid });
  }

  @Query(returns => [RestaurantModel])
  async findRestaurant(@Args('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findById(id);
  }

  @Mutation(returns => RestaurantModel)
  async updateRestaurant(
    @Args('data') input: RestaurantUpdateInput,
    @Args('id') id: string,
    @Context() ctx: Request,
  ): Promise<Restaurant> {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    return this.restaurantService.update(id, input, user.uid);
  }

  @ResolveField(returns => UserModel)
  createdBy(@Parent() restaurant: Restaurant) {
    return this.authService.getUserById(restaurant.createdBy);
  }
}
