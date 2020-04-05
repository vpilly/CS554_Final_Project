import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthzController } from './controllers';
import config from '../../configuration/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [config] })],
  controllers: [HealthzController],
})
export class ApiModule {}
