import { IRestaurant } from './restaurant.interface';

export interface ICathegory {
  name: string;
  restaurants: IRestaurant[];
}