import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  @Output() isLogin = new EventEmitter<boolean> ();
  login:boolean = false;
  constructor(){}
  ngOnInit(): void {
    console.log('se ha cargado el componente login')
  }
  changeLogin(){
    this.login = !this.login;
    this.isLogin.emit(this.login);
  }
  

}
