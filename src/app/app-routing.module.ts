import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/home/main-page/main-page.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { PromosPageComponent } from './components/promos/promos-page/promos-page.component';

const routes: Routes = [
  {path: 'home', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'promos', component: PromosPageComponent},
  {path: '**', redirectTo: 'home'},
  //{path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
