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
  ReservationService,
  RestaurantService,
} from 'src/libs/data-access/services';
import {
  ReservationModel,
  ReservationCreateInput,
  UserModel,
  RestaurantModel,
} from '../../models';
import { AuthService } from '../../services/auth/auth.service';
import { Request } from 'express';
import { Reservation } from 'src/libs/mongoose/schemas';

@Resolver(() => ReservationModel)
export class ReservationResolver {
  constructor(
    private readonly reservationService: ReservationService,
    private readonly authService: AuthService,
    private readonly restaurantService: RestaurantService,
  ) {}
  @Mutation(returns => ReservationModel)
  async createReservation(
    @Args('data') input: ReservationCreateInput,
    @Context() ctx: Request,
  ): Promise<Reservation> {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    return this.reservationService.create({ ...input, userId: user.uid });
  }

  @Query(returns => [ReservationModel])
  async findReservationsByUser(
    @Context() ctx: Request,
  ): Promise<Reservation[]> {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    return this.reservationService.findByUserId(user.uid);
  }

  @Mutation(returns => ReservationModel)
  async updateReservation(
    @Args('data') input: ReservationCreateInput,
    @Context() ctx: Request,
  ): Promise<Reservation> {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    return this.reservationService.update({ ...input, userId: user.uid });
  }

  @Mutation(returns => Boolean)
  async delete(
    @Args('restaurantId') restaurantId: string,
    @Context() ctx: Request,
  ) {
    const authorizationHeader = ctx.headers.authorization;
    const user = await this.authService.verifyUser(authorizationHeader);
    await this.reservationService.delete(user.uid, restaurantId);
    return true;
  }

  @ResolveField(returns => UserModel)
  user(@Parent() reservation: Reservation) {
    return this.authService.getUserById(reservation.userId);
  }

  @ResolveField(returns => RestaurantModel)
  async restaurant(@Parent() reservation: Reservation) {
    return this.restaurantService.findById(reservation.restaurantId);
  }
}
