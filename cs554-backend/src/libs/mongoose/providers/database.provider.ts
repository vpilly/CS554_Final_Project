import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Provider } from '@nestjs/common';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const databaseProvider: Provider = {
  provide: DATABASE_CONNECTION,
  useFactory: (configService: ConfigService): Promise<typeof mongoose> => {
    const database = configService.get('database');
    return mongoose.connect(`mongodb://${database.host}:${database.port}`, {
      db: database.db,
      user: database.user,
      pass: database.pass,
    });
  },
  inject: [ConfigService],
};
