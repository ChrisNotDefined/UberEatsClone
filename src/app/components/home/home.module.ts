import { AssetsModule } from './../../components/assets/assets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row/row.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RowComponent, NavBarComponent, MainPageComponent, BannerComponent],
  imports: [
    RouterModule,
    CommonModule,
    AssetsModule
  ],
  exports: [
    RowComponent,
    NavBarComponent,
    MainPageComponent
  ]
})
export class HomeModule { }
