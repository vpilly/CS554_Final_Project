import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { HealthzController } from './controllers';
import config from '../../configuration/configuration';
import { UserModule } from '../../libs/user/user.module';
import { UserResolver } from './resolvers';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [HealthzController],
  providers: [UserResolver],
})
export class ApiModule {}
