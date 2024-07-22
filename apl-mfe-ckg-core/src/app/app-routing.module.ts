import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerHomeComponent } from './container-home/container-home.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { EmptyRouteComponent } from './empty.component';

const routes: Routes = [
  { path: '', component: ContainerHomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'home', component: ContainerHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: EmptyRouteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
