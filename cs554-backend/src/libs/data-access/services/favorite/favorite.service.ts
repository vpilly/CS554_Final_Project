import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Favorite, Restaurant } from 'src/libs/mongoose/schemas';
import { FavoriteCreateInput } from '../../interfaces';

@Injectable()
export class FavoriteService {
  constructor(
    @Inject('FAVORITE_MODEL')
    private favoriteModel: Model<Favorite>,
    @Inject('RESTAURANT_MODEL')
    private restaurantModel: Model<Restaurant>,
  ) {}

  async create(createDto: FavoriteCreateInput): Promise<Favorite> {
    const restaurant = await this.restaurantModel
      .findById(createDto.restaurantId)
      .exec();
    if (!restaurant) throw new Error('Restaurant does not exist');
    const fav = await this.favoriteModel
      .find({ userId: createDto.userId, restaurantId: createDto.restaurantId })
      .exec();
    if (fav.length > 0) throw new Error('Favorite already exists');
    const createdFav = new this.favoriteModel(createDto);
    return createdFav.save();
  }

  async findAll(): Promise<Favorite[]> {
    return this.favoriteModel.find().exec();
  }

  async findByUserId(userId: string): Promise<Favorite[]> {
    return this.favoriteModel.find({ userId }).exec();
  }

  async delete(userId: string, restaurantId: string) {
    return this.favoriteModel.deleteOne({ userId, restaurantId }).exec();
  }
}
