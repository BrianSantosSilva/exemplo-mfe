import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {


  public listMenu = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

}
