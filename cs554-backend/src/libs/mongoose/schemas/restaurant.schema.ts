import { Schema, Document } from 'mongoose';
import { MenuItemSchema, MenuItem } from './menu-item.schema';

export const RestaurantSchema = new Schema({
  description: String,
  hoursOpen: String,
  menu: [MenuItemSchema],
  foodType: String,
  location: String,
  createdBy: String,
});

export interface Restaurant extends Document {
  description: string;
  hoursOpen: string;
  menu: MenuItem[];
  foodType: string;
  location: string;
  readonly createdBy: string;
}
