import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ICathegory } from '../interfaces/cathegory.interface';
import { IRestaurant } from '../interfaces/restaurant.interface';
import { RestaurantService } from '../services/restaurant/restaurant.service';

export interface IRCatalog {
  catalog: ICathegory[];
  selectedRestaurant?: IRestaurant;
}

export class LoadCatalogAction {
  public static type = '[Catalog] Load';
  constructor() {}
}

@State<IRCatalog>({
  name: 'CatalogState',
  defaults: {
    catalog: [],
    selectedRestaurant: null,
  },
})
@Injectable()
export class CatalogState {
  constructor(public restaurantService: RestaurantService) {}

  @Selector()
  static getCatalog(state: IRCatalog): ICathegory[] {
    return state.catalog;
  }

  @Selector()
  static getCathegory(state: IRCatalog, name: string): ICathegory {
    let Cathegory = state.catalog.find(c => c.name === name);
    return Cathegory;
  }

  @Selector()
  static getSelectedRestaurant(state: IRCatalog): IRestaurant {
    return state.selectedRestaurant;
  }

  @Action(LoadCatalogAction)
  load(state: StateContext<IRCatalog>, action: LoadCatalogAction) {   
    let newCatalog = this.restaurantService.getCatalog();
    state.patchState({ catalog: newCatalog });
  }
}
