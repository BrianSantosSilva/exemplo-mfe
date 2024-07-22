import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gerenciar-limite',
  templateUrl: './gerenciar-limite.component.html',
  styleUrls: ['./gerenciar-limite.component.scss']
})
export class GerenciarLimiteComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public voltarHome(){
    this.router.navigate(['home'])
  }



}
