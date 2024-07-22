import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { ContainerNavbarComponent } from './container-navbar/container-navbar.component';

const routes: Routes = [
  { path: '', component: ContainerNavbarComponent },
  { path: 'menu-lateral', component: MenuLateralComponent },
  { path: 'barra-pesquisa', component: BarraPesquisaComponent},
  { path: '**', component: ContainerNavbarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
