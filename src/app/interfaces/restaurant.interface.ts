export interface IRestaurant {
  id: number;
  name: string;
  priceRange?: [number, number];
  details: string;
  imageUrl: string;
}