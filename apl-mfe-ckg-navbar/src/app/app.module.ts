import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { ContainerNavbarComponent } from './container-navbar/container-navbar.component';
import { CrossService } from './utils/services/cross.service';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    MenuLateralComponent,
    BarraPesquisaComponent,
    ContainerNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CrossService],
  bootstrap: [AppComponent]
})
export class AppModule { }
