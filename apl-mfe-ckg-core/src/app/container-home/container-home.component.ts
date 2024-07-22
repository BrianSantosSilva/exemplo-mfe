import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CrossService } from '../utils/services/cross.service';
//import { setLogin,getLogin,LoginSubject } from "@safra/apl-mfe-ckg-cross";

@Component({
  selector: 'app-container-home',
  templateUrl: './container-home.component.html',
  styleUrls: ['./container-home.component.scss']
})
export class ContainerHomeComponent implements OnInit {

  public login = '';
  public loginSJ:any;
  constructor(public cd: ChangeDetectorRef, public cross: CrossService) { }

  ngOnInit(): void {

    this.loginSJ = this.cross.getSubjectData('login').subscribe((retorno:any) => { 
      this.login = retorno?.valor;
      this.cd.detectChanges();
    });
    ;
    this.login = this.cross.getData('login')?.valor;
  }

  mudarLogin(){
    this.cross.setData({chave: 'login',valor:'Felipe'})
  }

  ngOnDestroy() {
    if (this.loginSJ) { 
      this.loginSJ.unsubscribe(); }
    }

}
