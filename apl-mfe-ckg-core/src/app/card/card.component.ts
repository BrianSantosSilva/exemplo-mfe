import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  listaCard = [1,2,3,4,5,6,7,8]
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirecionaCartao(){
    this.router.navigate(['cartoes/solicitar'])
  }

}
