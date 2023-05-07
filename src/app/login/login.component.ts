import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from '../common/global-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  islogin:boolean = false;
  constructor(private globalService:GlobalService){}
  ngOnInit(): void {
    this.globalService.currentLogin.subscribe(value =>{
      this.islogin = value;
    })
    console.log('se ha cargado el componente login')
  }
  changeLogin(){
    this.globalService.updateCurrentLogin(!this.islogin);
  }
  

}
