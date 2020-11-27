import { Injectable } from '@angular/core';
import { ICathegory } from 'src/app/interfaces/cathegory.interface';
import { IRestaurant } from 'src/app/interfaces/restaurant.interface';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {


  private catalog: ICathegory[] = [
    {
      name: 'Italiana',
      restaurants: [
        {
          id: 1,
          name: 'Italiannis',
          details: 'Deliciosas pastas y especias',
          imageUrl: 'https://www.eluniversal.com.mx/sites/default/files/2015/07/24/italiannis.jpg',
          priceRange: [30, 50]
        },
      ],
    },
    {
      name: 'Mexicana',
      restaurants: [
        {
          id: 2,
          name: 'Tacos Don Felipe',
          details: 'Deliciosos tacos de suadero y tripa',
          imageUrl: 'https://cdn.kiwilimon.com/recetaimagen/13910/25776.jpg'
        }
      ]
    }
  ];

  constructor() {}

  getCathegory(name: string) {
    return this.catalog.find(elem => elem.name === name)
  }

  getCatalog() {
    return this.catalog;
  }
}
