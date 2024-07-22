import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { EmptyRouteComponent } from './empty.component';
import { GerenciarLimiteComponent } from './gerenciar-limite/gerenciar-limite.component';


const routes: Routes = [
  { path: '', component: SolicitarComponent },
  { path: 'cartoes/solicitar', component: SolicitarComponent },
  { path: 'cartoes/gerenciar-limite', component: GerenciarLimiteComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
