import { Schema, Document } from 'mongoose';

export const FavoriteSchema = new Schema({
  restaurantId: String,
  userId: String,
});

export interface Favorite extends Document {
  readonly restaurantId: string;
  readonly userId: string;
}
