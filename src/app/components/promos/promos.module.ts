import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromosPageComponent } from './promos-page/promos-page.component';



@NgModule({
  declarations: [PromosPageComponent],
  imports: [
    CommonModule
  ],
  exports: [PromosPageComponent]
})
export class PromosModule { }
