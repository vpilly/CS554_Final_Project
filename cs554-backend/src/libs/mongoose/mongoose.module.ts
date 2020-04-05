import { Module } from '@nestjs/common';
import { databaseProvider, schemaProviders } from './providers';
import { ConfigModule } from '@nestjs/config';
import config from '../../configuration/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [config] })],
  providers: [databaseProvider, ...schemaProviders],
  exports: [...schemaProviders],
})
export class MongooseModule {}
