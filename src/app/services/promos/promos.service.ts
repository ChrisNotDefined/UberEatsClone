import { IPromotion } from './../../interfaces/promo.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromosService {

  private promos: IPromotion[] = [
    {
      name: "2x1 En Macdonalds",
      description: "2x1 En Macdonalds en pedidos mayores a 150 pesos",
      code: "MAC24DDF",
      imgPromoUrl: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/promo/FCO_Fresh_Beef_DT.jpg?$FC_One_By_Three$'
    }
  ]

  constructor() { }

  getPromotions() : IPromotion[] {
    return this.promos;
  }
}
