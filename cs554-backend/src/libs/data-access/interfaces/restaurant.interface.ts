import { MenuItem } from 'src/libs/mongoose/schemas';

export interface RestaurantCreateInput {
  description: string;
  hoursOpen: string;
  menu: MenuItem[];
  foodType: string;
  location: string;
  createdBy: string;
}
