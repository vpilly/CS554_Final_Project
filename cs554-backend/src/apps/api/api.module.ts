import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import config from '../../configuration/configuration';
import { UserModule } from '../../libs/user/user.module';
import { UserResolver } from './resolvers';
import { AuthService } from './services/auth/auth.service';
import { FirebaseGuard } from './guards/firebase.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  providers: [
    UserResolver,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: FirebaseGuard,
    },
  ],
})
export class ApiModule {}
