import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthzController } from './controllers';
import config from '../../configuration/configuration';
import { MongooseModule } from 'src/libs/mongoose/mongoose.module';

@Module({
  imports: [ConfigModule.forRoot({ load: [config] }), MongooseModule],
  controllers: [HealthzController],
})
export class ApiModule {}
