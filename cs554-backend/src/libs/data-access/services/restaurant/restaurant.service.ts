import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Restaurant } from 'src/libs/mongoose/schemas';
import { RestaurantCreateInput } from '../../interfaces';

@Injectable()
export class RestaurantService {
  constructor(
    @Inject('RESTAURANT_MODEL')
    private restaurantModel: Model<Restaurant>,
  ) {}

  async create(createDto: RestaurantCreateInput): Promise<Restaurant> {
    const createdRest = new this.restaurantModel(createDto);
    return createdRest.save();
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async findById(restaurantId: string): Promise<Restaurant> {
    return this.restaurantModel.findById(restaurantId).exec();
  }

  async update(
    restaurantId: string,
    newInfo: Partial<RestaurantCreateInput>,
    userId: string,
  ): Promise<Restaurant> {
    return this.restaurantModel
      .updateOne({ _id: restaurantId }, { ...newInfo })
      .exec();
  }
}
