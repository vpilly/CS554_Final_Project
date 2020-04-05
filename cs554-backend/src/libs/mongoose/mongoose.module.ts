import { Module } from '@nestjs/common';
import { databaseProvider, schemaProviders } from './providers';

@Module({
  providers: [databaseProvider, ...schemaProviders],
  exports: [...schemaProviders],
})
export class MongooseModule {}
