import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
   })

export class GlobalService{
    
    private isLogin = new BehaviorSubject('esto es una variable');
    currentLogin = this.isLogin.asObservable();

    constructor(){}

    updateCurrentLogin(message:string){
        this.isLogin.next(message);
    }
}