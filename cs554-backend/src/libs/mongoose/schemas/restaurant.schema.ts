import { Schema, Document } from 'mongoose';
import { MenuItemSchema, MenuItem } from './menu-item.schema';

export const RestaurantSchema = new Schema({
  name: String,
  description: String,
  hoursOpen: String,
  menu: [MenuItemSchema],
  pricing: String,
  foodType: String,
  location: String,
  createdBy: String,
});

export interface Restaurant extends Document {
  name: string;
  description: string;
  hoursOpen: string;
  menu: MenuItem[];
  pricing: String;
  foodType: string;
  location: string;
  readonly createdBy: string;
}
