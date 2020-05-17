import {
  Resolver,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Query,
  Context,
} from '@nestjs/graphql';
import {
  FavoriteModel,
  FavoriteCreateInput,
  UserModel,
  RestaurantModel,
} from '../../models';
import {
  FavoriteService,
  RestaurantService,
} from 'src/libs/data-access/services';
import { Favorite } from 'src/libs/mongoose/schemas';
import { AuthService } from '../../services/auth/auth.service';
import { Request } from 'express';

@Resolver(() => FavoriteModel)
export class FavoriteResolver {
  constructor(
    private readonly favoriteService: FavoriteService,
    private readonly authService: AuthService,
    private readonly restaurantService: RestaurantService,
  ) {}
  @Mutation(returns => FavoriteModel)
  async createFavorite(
    @Args('data') input: FavoriteCreateInput,
    @Context() ctx: Request,
  ): Promise<Favorite> {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    return this.favoriteService.create({ ...input, userId: user.uid });
  }

  @Query(returns => [FavoriteModel])
  async findFavorites(@Context() ctx: Request): Promise<Favorite[]> {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    return this.favoriteService.findByUserId(user.uid);
  }

  @Mutation(returns => Boolean)
  async deleteFavorite(
    @Args('restaurantId') restaurantId: string,
    @Context() ctx: Request,
  ) {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    await this.favoriteService.delete(user.uid, restaurantId);
    return true;
  }

  @ResolveField(returns => UserModel)
  user(@Parent() favorite: Favorite) {
    return this.authService.getUserById(favorite.userId);
  }

  @ResolveField(returns => RestaurantModel)
  async restaurant(@Parent() favorite: Favorite) {
    return this.restaurantService.findById(favorite.restaurantId);
  }
}
