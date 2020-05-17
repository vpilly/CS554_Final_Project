import { Schema, Document } from 'mongoose';

export const ReservationSchema = new Schema({
  restaurantId: String,
  reservationTime: Date,
  numberOfPeople: Number,
  userId: String,
});

export interface Reservation extends Document {
  readonly restaurantId: string;
  readonly reservationTime: Date;
  readonly numberOfPeople: number;
  readonly userId: string;
}
