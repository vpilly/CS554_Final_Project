import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/libs/mongoose/schemas';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUsertDto: Partial<{ name: string }>): Promise<User> {
    const createdCat = new this.userModel(createUsertDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
