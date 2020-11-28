import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromosPageComponent } from './promos-page/promos-page.component';
import { PromoCardComponent } from './promo-card/promo-card.component';



@NgModule({
  declarations: [PromosPageComponent, PromoCardComponent],
  imports: [
    CommonModule
  ],
  exports: [PromosPageComponent, PromoCardComponent]
})
export class PromosModule { }
