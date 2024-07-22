import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { getLogin, LoginSubject } from "@safra/apl-mfe-ckg-cross"; 
import { CrossService } from '../utils/services/cross.service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.scss']
})
export class BarraPesquisaComponent implements OnInit {

  public login = '';
  public teste = '';
  public loginSJ:any;
  constructor(public cd: ChangeDetectorRef,public cross: CrossService) { }

  async ngOnInit(): Promise<void> {

    this.loginSJ = this.cross.getSubjectData('login').subscribe((retorno:any) => { 
      this.login = retorno?.valor;
      this.cd.detectChanges();
    });
    ;
    this.login = this.cross.getData('login')?.valor;
  }

  public testeF(){
    this.teste = "acabate";
  }

  ngOnDestroy() {
    if (this.loginSJ) { 
      this.loginSJ.unsubscribe(); }
    }

}
