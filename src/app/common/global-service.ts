import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn:'root',
})
export class GlobalService{
    //declaro por defecto que sea false al comienzo de la aplicación.
    private isLogin = new BehaviorSubject<boolean>(false);
    currentLogin = this.isLogin.asObservable();

    constructor(){}

    updateCurrentLogin(login:boolean){
        this.isLogin.next(login);
    }
}