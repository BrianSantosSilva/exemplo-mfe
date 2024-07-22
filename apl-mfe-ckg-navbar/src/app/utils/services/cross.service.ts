import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class CrossService {
    public cross:any;

    constructor(){
        // Evita erro modulo ao rodar aplicação isolada 
        try {
            this.cross  = require('@safra/apl-mfe-ckg-cross');    
        } catch (error) {
            
        }
       
    }

    public getData(newData:any){
        if(!this.cross)
            return;

        return this.cross.getData(newData);
    }

    public setData(newData:any){
        if(!this.cross)
            return;

        this.cross.setData(newData);
    }

    public getSubjectDataFull(chave:any){
        if(!this.cross)
            return;

        return this.cross.DataSubject;
    }

    public getSubjectData(chave:any){
        if(!this.cross)
            return of([]);

        var subj = this.cross.DataSubject.pipe(
            map((retorno: any) => {
                return retorno.find((element: any) => element.chave == chave);
            }
        ))

        return subj;
    }

}

