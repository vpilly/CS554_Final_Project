import { Module } from '@nestjs/common';
import { MongooseModule } from '../mongoose/mongoose.module';
import {
  FavoriteService,
  ReservationService,
  RestaurantService,
} from './services';

@Module({
  imports: [MongooseModule],
  providers: [FavoriteService, ReservationService, RestaurantService],
  exports: [FavoriteService, ReservationService, RestaurantService],
})
export class DataAccessModule {}
