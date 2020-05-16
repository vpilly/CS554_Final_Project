import { Schema, Document } from 'mongoose';

export const MenuItemSchema = new Schema({
  item: String,
  price: Number,
});

export interface MenuItem extends Document {
  readonly item: string;
  readonly price: number;
}
