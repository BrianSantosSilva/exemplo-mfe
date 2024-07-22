import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { singleSpaAngular } from 'single-spa-angular';
import { setLogin } from "@safra/apl-mfe-ckg-cross";
@Component({
  selector: 'app-cartoes-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss']
})
export class SolicitarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public voltarHome(){
    this.router.navigate(['home'])
  }

  public gerenciarLimite(){
    this.router.navigate(['cartoes/gerenciar-limite'])
  }



}
