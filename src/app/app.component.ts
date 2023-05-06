import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLogin:boolean = false;
  title = 'portfolio-app';
  ngOnInit(): void {
    console.log('componente cargado correctament desde el ngoninit')
  }
  receiveLogin($event:boolean){
      console.log('holi')
      this.isLogin = $event;
  }
  

  
}
