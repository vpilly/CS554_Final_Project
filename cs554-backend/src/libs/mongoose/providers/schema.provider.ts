import { Provider } from '@nestjs/common';
import { DATABASE_CONNECTION } from './database.provider';
import { Connection } from 'mongoose';
import {
  UserSchema,
  FavoriteSchema,
  ReservationSchema,
  RestaurantSchema,
} from '../schemas';

export const schemaProviders: Provider[] = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: 'FAVORITE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Favorite', FavoriteSchema),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: 'RESERVATION_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Reservation', ReservationSchema),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: 'RESTAURANT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Restaurant', RestaurantSchema),
    inject: [DATABASE_CONNECTION],
  },
];
