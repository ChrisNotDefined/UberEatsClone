import { LoadPromotionsAction, PromotionsState } from './../../../Models/promotions.redux';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IPromotion } from 'src/app/interfaces/promo.interface';

@Component({
  selector: 'app-promos-page',
  templateUrl: './promos-page.component.html',
  styleUrls: ['./promos-page.component.scss']
})
export class PromosPageComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(PromotionsState.getPromotions) promotions$: Observable<IPromotion[]>;

  ngOnInit(): void {
    this.store.dispatch(new LoadPromotionsAction())
  }
}
