import { Schema, Document } from 'mongoose';

export const ReservationSchema = new Schema({
  restaurantId: String,
  reservationTime: Date,
  userId: String,
});

export interface Reservation extends Document {
  readonly restaurantId: string;
  readonly reservationTime: Date;
  readonly userId: string;
}
