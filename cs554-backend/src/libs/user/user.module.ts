import { Module } from '@nestjs/common';
import { MongooseModule } from '../mongoose/mongoose.module';
import { UserService } from './services';

@Module({
  imports: [MongooseModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
