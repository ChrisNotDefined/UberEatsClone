import { PromosModule } from './components/promos/promos.module';
import { PromotionsState } from './Models/promotions.redux';
import { CatalogState } from './Models/catalog.redux';
import { AssetsModule } from './components/assets/assets.module';
import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PromosModule,
    LoginModule,
    AssetsModule,
    NgxsModule.forRoot([CatalogState, PromotionsState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
