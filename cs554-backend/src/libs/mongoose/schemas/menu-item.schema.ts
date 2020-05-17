import { Schema, Document } from 'mongoose';

export const MenuItemSchema = new Schema({
  item: String,
  price: Number,
});

export interface MenuItem {
  readonly item: string;
  readonly price: number;
}
