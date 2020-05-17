import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import config from '../../configuration/configuration';
import {
  FavoriteResolver,
  ReservationResolver,
  RestaurantResolver,
} from './resolvers';
import { AuthService } from './services/auth/auth.service';
import { FirebaseGuard } from './guards/firebase.guard';
import { APP_GUARD } from '@nestjs/core';
import { DataAccessModule } from 'src/libs/data-access/data-access.module';
import { ReservationsGateway } from './gateways/reservations.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    DataAccessModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ ...req }),
    }),
  ],
  providers: [
    FavoriteResolver,
    ReservationResolver,
    RestaurantResolver,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: FirebaseGuard,
    },
    ReservationsGateway,
  ],
})
export class ApiModule {}
