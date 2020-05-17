import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Reservation, Restaurant } from 'src/libs/mongoose/schemas';
import { ReservationCreateInput } from '../../interfaces';

@Injectable()
export class ReservationService {
  constructor(
    @Inject('RESERVATION_MODEL')
    private reservationModel: Model<Reservation>,
    @Inject('RESTAURANT_MODEL')
    private restaurantModel: Model<Restaurant>,
  ) {}

  async create(createDto: ReservationCreateInput): Promise<Reservation> {
    createDto.reservationTime;
    const now = new Date();
    if (now > createDto.reservationTime)
      throw new Error('Invalid Updated Date');
    const restaurant = await this.restaurantModel
      .findById(createDto.restaurantId)
      .exec();
    if (!restaurant) throw new Error('Restaurant does not exist');
    if (now > createDto.reservationTime)
      throw new Error('Invalid Updated Date');
    const createdReserve = new this.reservationModel(createDto);
    return createdReserve.save();
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationModel.find().exec();
  }

  async findByUserId(userId: string): Promise<Reservation[]> {
    return this.reservationModel.find({ userId }).exec();
  }

  async findByRestaurantId(restaurantId: string): Promise<Reservation[]> {
    return this.reservationModel.find({ restaurantId }).exec();
  }

  async update(
    restaurantId: string,
    reservationTime: Date,
    userId: string,
  ): Promise<Reservation> {
    const now = new Date();
    if (now > reservationTime) throw new Error('Invalid Updated Date');
    return this.reservationModel
      .updateOne({ restaurantId, userId }, { reservationTime })
      .exec();
  }

  async delete(userId: string, restaurantId: string) {
    return this.reservationModel.deleteOne({ userId, restaurantId }).exec();
  }
}
