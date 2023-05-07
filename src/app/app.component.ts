import { Component, OnInit } from '@angular/core';
import { GlobalService } from './common/global-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLogin:boolean = false;
  title = 'portfolio-app';

  constructor(private globalservice:GlobalService){}

  ngOnInit(): void {
    this.globalservice.currentLogin.subscribe(value =>{
      this.isLogin = value;
    })
    console.log('componente cargado correctament desde el ngoninit')
  }

  //Pendiente llamada al backend para que invalide el token y lo meta en la blacklist para que no sea posible volver a utilizarlo.
  logout(){
    this.isLogin = false;
  }
  

  

  
}
