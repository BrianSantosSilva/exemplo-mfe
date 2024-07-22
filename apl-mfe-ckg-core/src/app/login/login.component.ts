import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { singleSpaAngular } from 'single-spa-angular';
import { CrossService } from '../utils/services/cross.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public cross: CrossService) { }

  ngOnInit(): void {
  }

  public login(){
    this.cross.setData({chave: 'login',valor:'Brian'})
    //setLogin("Brian")
    this.router.navigate(['/home'])
  }

}
