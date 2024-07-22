import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { EmptyRouteComponent } from './empty.component';
import { GerenciarLimiteComponent } from './gerenciar-limite/gerenciar-limite.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitarComponent,
    GerenciarLimiteComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
