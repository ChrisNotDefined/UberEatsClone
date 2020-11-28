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
          details: 'Deliciosas pastas y especias, cocinados por chefs italianos',
          imageUrl:
            'https://www.eluniversal.com.mx/sites/default/files/2015/07/24/italiannis.jpg',
          priceRange: [50, 120],
        },
        {
          id: 11,
          name: 'Mi piaci',
          details: 'Pizzeria al horno y a la leña, especialidades del chef',
          imageUrl: 'https://www.mipiaci.mx/img/3361/141.jpg',
          priceRange: [100, 500],
        },
        {
          id: 12,
          name: 'Questa pasta',
          details:
            'Enorme selección de pastaciutta, reconocido por su pan de ajo de calidad artesanal',
          imageUrl:
            'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/47391957_517302412082854_5782120157694394368_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHnM8FFdvutyetqcpxpy_83DnMNfoZkcoYOcw1-hmRyhgXRZbOjIanOxDEm0zlkvl3xHq8a3Pyga47xtwowJt0s&_nc_ohc=c99PwfUF1W4AX9BqFuK&_nc_ht=scontent-qro1-1.xx&oh=8f7484a309eb2f898d92eec1431251df&oe=5FE86668',
          priceRange: [40, 270],
        },
        {
          id: 13,
          name: 'Il Bambino',
          details: 'Restaurante Italiano con enfoque a los pequeños',
          imageUrl:
            'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/11/recetas-de-pastas-faciles-y-rapidas.jpg',
          priceRange: [40, 170],
        },
      ],
    },{
      name: 'Comida Rápida',
      restaurants: [
        {
          id: 3,
          name: 'MacDonalds',
          details: 'Macdonalds tiene tu comida desde antes de que la pidas aprovecha 2x1 en el combo Mac trio',
          imageUrl: 'https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg',
          priceRange: [50, 250]
        },{
          id: 31,
          name: 'Burger King',
          details: 'Los reyes de las hamburguesas de comida rápida, una hamburguesa y un refresco a sólo 50 pesos',
          imageUrl: 'https://laopinion.com/wp-content/uploads/sites/3/2020/02/promocion-ex-burger-king.jpg?quality=80&strip=all&w=1200',
          priceRange: [50, 350]
        }
      ]
    },
    {
      name: 'Mexicana',
      restaurants: [
        {
          id: 2,
          name: 'Tacos Don Felipe',
          details: 'Deliciosos tacos de suadero y tripa',
          imageUrl: 'https://cdn.kiwilimon.com/recetaimagen/13910/25776.jpg',
          priceRange: [10, 50],
        },
        {
          id: 21,
          name: 'La Posada',
          details: 'Especializandose en los tacos de costilla y la carne asada',
          imageUrl: 'https://cdn.kiwilimon.com/recetaimagen/33583/38988.jpg',
          priceRange: [10, 80],
        },
        {
          id:22, 
          name: 'Mary Chuy',
          details: 'Fonda de la casa de la señora María "Mary Chuy", reconocida en su domicilio por alimentos caseros increiblemente deliciosos',
          imageUrl: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/09/enchiladaso.jpg',
          priceRange: [20, 240]
        }
      ],
    },
    
  ];

  constructor() {}

  getCathegory(name: string) {
    return this.catalog.find((elem) => elem.name === name);
  }

  getCatalog() {
    return this.catalog;
  }
}
