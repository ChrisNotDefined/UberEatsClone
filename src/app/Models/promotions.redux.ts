import { PromosService } from './../services/promos/promos.service';
import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { IPromotion } from '../interfaces/promo.interface';

export interface IRPromotions {
  availablePromotions: IPromotion[];
}

export class LoadPromotionsAction {
  public static type = '[Promos] Load';
  constructor() {}
}

@State<IRPromotions>({
  name: 'PromotionsState',
  defaults: {
    availablePromotions: [],
  }
})

@Injectable()
export class PromotionsState {
  constructor(public promosService: PromosService) {}

  @Selector()
  static getPromotions(state: IRPromotions): IPromotion[] {
    return state.availablePromotions;
  }

  @Action(LoadPromotionsAction)
  load(state: StateContext<IRPromotions>, action: LoadPromotionsAction){
    let newPromotions = this.promosService.getPromotions();
    state.setState({availablePromotions: newPromotions});
  }
}