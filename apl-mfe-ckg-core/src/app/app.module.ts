import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ContainerHomeComponent } from './container-home/container-home.component';
import { LoginComponent } from './login/login.component';
import { EmptyRouteComponent } from './empty.component';
import { CrossService } from './utils/services/cross.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContainerHomeComponent,
    LoginComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CrossService],
  bootstrap: [AppComponent]
})
export class AppModule { }
