import { Provider } from '@nestjs/common';
import { DATABASE_CONNECTION } from './database.provider';
import { Connection } from 'mongoose';
import { UserSchema } from '../schemas';

export const schemaProviders: Provider[] = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
